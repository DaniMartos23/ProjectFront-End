import { Component } from '@angular/core';
import { ChollosService } from 'src/app/services/chollos.service';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-adminchollo',
  templateUrl: './adminchollo.component.html',
  styleUrls: ['./adminchollo.component.css']
})
export class AdmincholloComponent {
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
    viajes: null,
    usuario:{ id :null}
  }

  constructor(private serviciochollos: ChollosService,  private serviciosgenerales: GeneralesService,private usuariosservice:UsuariosService){}

  onSubmit(){

    this.serviciosgenerales.retornadato("viajes",this.form.viajes)
    .subscribe(result =>{
      this.form.viajes={id :result.id}
    })

    this.usuariosservice.retornarUsuario()
    .subscribe(result =>{
      this.form.usuario={id :result.id}
    })

    this.serviciochollos.crearchollo(this.form)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
  mostrarmenu(numero:any){
    this.menu=numero;
  }

  buscachollo(){
    this.serviciochollos.retornarchollo(this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }

  borrachollo(){
    this.serviciochollos.deletechollo(this.id)
      .subscribe(result =>this.datos=result)
      this.menu=1;
  }
}
