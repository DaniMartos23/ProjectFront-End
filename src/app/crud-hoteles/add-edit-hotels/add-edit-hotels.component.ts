import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Hoteles } from 'src/app/interfases/hoteles';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-add-edit-hotels',
  templateUrl: './add-edit-hotels.component.html',
  styleUrls: ['./add-edit-hotels.component.css']
})
export class AddEditHotelsComponent {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _hotelesService: HotelesService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      estrellas: ['', Validators.required],
      dirrecion: ['', Validators.required],
      localidad: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo_pension: ['', Validators.required],
      mascotas: ['', Validators.required],

    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerHoteles(this.id)
    }
  }

  obtenerHoteles(id: number) {
    this.loading = true;
    this._hotelesService.getHoteles(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        estrellas: data.estrellas,
        direccion: data.direccion,
        localidad: data.localidad,
        precio: data.precio,
        descripcion: data.descripcion,
        tipo_pension: data.tipo_pension,
        mascotas: data.mascotas
      })
      this.loading = false;
    })
  }

  agregarEditarHoteles() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const hotHoteles = {
      nombre: this.form.value.nombre,
      estrellas: this.form.value.estrellas,
      direccion: this.form.value.direccion,
      localidad: this.form.value.localidad,
      precio: this.form.value.precio,
      descripcion: this.form.value.descripcion,
      tipo_pension: this.form.value.tipo_pension,
      mascotas: this.form.value.mascotas
    }

    if(this.id != 0) {
      hoteles.id = this.id;
      this.editarHoteles(this.id, hoteles);
    } else {
      this.agregarHoteles(hoteles);
    }
  }

  editarHoteles(id: number, hoteles: Hoteles) {
    this.loading = true;
    this._hotelesService.updateHoteles(id, hoteles).subscribe(() => {
      this.loading = false;
      console.log('llegue')
      this.mensajeExito('actualizada');
      this.router.navigate(['/listHoteles']);
    })
  }

  agregarHoteles(hoteles: Hoteles) {
      this._hotelesService.addHoteles(hoteles).subscribe(data => {
        this.mensajeExito('registrada');
        this.router.navigate(['/listHoteles']);
      })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`La Hoteles fue ${texto} con exito`,'', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
