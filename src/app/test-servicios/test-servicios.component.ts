import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChollosService } from '../services/chollos.service';
import { GeneralesService } from '../services/generales.service';
import { UsuariosService } from '../services/usuarios.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-test-servicios',
  templateUrl: './test-servicios.component.html',
  styleUrls: ['./test-servicios.component.css']
})
export class TestServiciosComponent {
  datos:any=null;
  crearchollos:any=false;
  modificarchollos:any=false;
  borrarchollos:any=false;
  crearviajes:any=false;
  modificarviajes:any=false;
  borrarviajes:any=false;
  crearvuelos:any=false;
  modificarvuelos:any=false;
  borrarvuelos:any=false;
  crearhoteles:any=false;
  modificarhoteles:any=false;
  borrarhoteles:any=false;

  form: any = {
    fechacaducidad: null,
    titulo: null,
    precio: null,
    descripcion: null,
    valoracion: null,
    unidades: null,
    image_url:null,
    viajes: null,
    usuario:null
  }
  Usuario:any={
    id :null
  }

  Viajes:any={
    id :null
  }

  constructor(private serviciochollos: ChollosService, private serviciosgenerales: GeneralesService,private usuariosservice:UsuariosService, private tokenstorage: TokenStorageService){}

  ngOnInit(){
  }

  mostrarcrear(){
    this.crearchollos=true;
  }

  onSubmit(){

    this.serviciosgenerales.retornadato("viajes",this.form.viajes)
    .subscribe(result =>{
      this.Viajes.id=result.id
      console.log(result)
      console.log(this.Viajes)
    })

    this.usuariosservice.retornarUsuario()
    .subscribe(result =>{
      this.Usuario.id=result.id
      console.log(result)
      console.log(this.Usuario)
    })


    this.datos=this.form;
    this.form.viajes=this.Viajes
    this.form.usuario=this.Usuario
    console.log(this.form)
    this.serviciochollos.crearchollo(this.form)
      .subscribe(result =>this.datos=result)
      this.crearchollos=false;
  }
  seleccionarchollos(){
    this.serviciochollos.retornarchollos()
      .subscribe(result =>this.datos=result)
  }

  borrarchollo(){
    this.serviciochollos.deletechollo(2)
      .subscribe(result =>this.datos=result)
  }
  onSubmit2(){
    this.serviciosgenerales.creardatos('hoteles',this.form)
      .subscribe(result =>this.datos=result)
  }
  mostrarcrearhotel(){
    this.crearchollos=false;
    this.modificarchollos=false;
    this.borrarchollos=false;
    this.crearviajes=false;
    this.modificarviajes=false;
    this.borrarviajes=false;
    this.crearvuelos=false;
    this.modificarvuelos=false;
    this.borrarvuelos=false;
    this.modificarhoteles=false;
    this.borrarhoteles=false;
    this.crearhoteles=true;
  }

  borrahoteles(){
    this.serviciosgenerales.deletedatos('hoteles',1)
    .subscribe(result =>this.datos=result)
  }
}
