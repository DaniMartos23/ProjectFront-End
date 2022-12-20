import { Component } from '@angular/core';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-adminviajes',
  templateUrl: './adminviajes.component.html',
  styleUrls: ['./adminviajes.component.css']
})
export class AdminviajesComponent {
  menu:number=1;
  datos:any;
  id:any;
  form: any = {
    fechacaducidad: null,
    titulo: null,
    precio: null,
    descripcion: null,
    valoracion: null,
    unidades: null,
    image_url:null,
    viajes: { id :null},
    usuario:{ id :null}
  }

  constructor(private serviciosgenerales: GeneralesService,private usuariosservice:UsuariosService){}

  onSubmit(){

    this.serviciosgenerales.retornadato("viajes",this.form.viajes)
    .subscribe(result =>{
      this.form.viajes.id=result.id
    })

    this.usuariosservice.retornarUsuario()
    .subscribe(result =>{
      this.form.usuario.id=result.id
    })

    this.serviciosgenerales.creardatos("viajes",this.form)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
  mostrarmenu(numero:any){
    this.menu=numero;
  }

  buscaviaje(){
    this.serviciosgenerales.retornadato("viajes",this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }

  borraviaje(){
    this.serviciosgenerales.deletedatos("viajes",this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
}
