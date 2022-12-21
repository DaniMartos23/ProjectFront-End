import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneralesService } from 'src/app/services/generales.service';

@Component({
  selector: 'app-adminhoteles',
  templateUrl: './adminhoteles.component.html',
  styleUrls: ['./adminhoteles.component.css']
})
export class AdminhotelesComponent {
  menu:number=1;
  mod:boolean=false;
  datos:any;
  id:any;
  form: any = {
    nombre: null,
    direccion: null,
    descripcion: null,
    localidad: null,
    estrellas: null,
    tipo_habitaciones: null,
    mascotas:null,
    tipo_pension: null
  }

  constructor(private serviciosgenerales: GeneralesService){}

  onSubmit(fcrear:NgForm){

    this.serviciosgenerales.creardatos("hoteles",this.form)
      .subscribe(result =>this.datos=result)
      this.menu=1;
      fcrear.resetForm();
  }
  mostrarmenu(numero:any){
    this.menu=numero;
    this.datos=null;
  }

  mostrarhoteles() {
    this.menu = 2;
    this.mod = false;
    this.serviciosgenerales
      .retornardatos('hoteles')
      .subscribe((result) => (this.datos = result));
  }

  buscahoteles() {
    this.serviciosgenerales
      .retornadato('hoteles', this.id)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }

  borrarhoteles(ids: number) {
    this.serviciosgenerales
      .deletedatos('hoteles', ids)
      .subscribe((result) => (this.datos = result));
    this.menu = 1;
  }
  modificahoteles(ids: number) {
    this.mod = true;
    this.serviciosgenerales
      .retornadato('hoteles', ids)
      .subscribe((result) => (this.datos = result));
  }
  modifica(fmodificar: NgForm) {

    if (this.form.nombre == null) {
      this.form.nombre = this.datos.nombre;
    }
    if (this.form.direccion == null) {
      this.form.direccion = this.datos.direccion;
    }
    if (this.form.descripcion == null) {
      this.form.descripcion = this.datos.descripcion;
    }
    if (this.form.localidad == null) {
      this.form.localidad = this.datos.localidad;
    }
    if (this.form.estrellas == null) {
      this.form.estrellas = this.datos.estrellas;
    }

    if (this.form.tipo_habitaciones == null) {
      this.form.tipo_habitaciones = this.datos.tipo_habitaciones;
    }

    if (this.form.mascotas == null) {
      this.form.mascotas = this.datos.mascotas;
    }

    if (this.form.tipo_pension == null) {
      this.form.tipo_pension = this.datos.tipo_pension;
    }


    this.serviciosgenerales
      .updatedatos('hoteles', this.datos.id, this.form)
      .subscribe((result) => {
        this.datos = result;
        this.mostrarhoteles();
        fmodificar.resetForm();
      });
  }
}

