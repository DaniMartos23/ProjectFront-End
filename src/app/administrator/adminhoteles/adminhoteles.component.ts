import { Component } from '@angular/core';
import { GeneralesService } from 'src/app/services/generales.service';

@Component({
  selector: 'app-adminhoteles',
  templateUrl: './adminhoteles.component.html',
  styleUrls: ['./adminhoteles.component.css']
})
export class AdminhotelesComponent {
  menu:number=1;
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

  onSubmit(){

    this.serviciosgenerales.creardatos("hoteles",this.form)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
  mostrarmenu(numero:any){
    this.menu=numero;
    this.datos=null;
  }

  buscahotel(){
    this.serviciosgenerales.retornadato("hoteles",this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }

  borrahotel(){
    this.serviciosgenerales.deletedatos("hoteles",this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
}
