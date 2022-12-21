import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-adminvuelos',
  templateUrl: './adminvuelos.component.html',
  styleUrls: ['./adminvuelos.component.css']
})
export class AdminvuelosComponent {
  menu:number=1;
  datos:any;
  id:any;
  form: any = {
    aerolinea: null,
    tipoAsiento: null,
    maletas: null,
    asignacion_asiento: null,
    duracion: null,
    escalas: null,
    origen:null,
    destino: null
  }

  constructor(private serviciosgenerales: GeneralesService,private usuariosservice:UsuariosService){}

  onSubmit(){
    console.log(this.form);
    this.serviciosgenerales.creardatos("vuelos",this.form)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
  mostrarmenu(numero:any){
    this.menu=numero;
  }

  buscavuelo(){
    this.serviciosgenerales.retornadato("vuelos",this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }

  borravuelo(){
    this.serviciosgenerales.deletedatos("vuelos",this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
}
