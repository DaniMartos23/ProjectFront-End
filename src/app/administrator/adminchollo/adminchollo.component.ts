import { Component } from '@angular/core';
import { async } from 'rxjs';
import { ChollosService } from 'src/app/services/chollos.service';
import { GeneralesService } from 'src/app/services/generales.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminchollo',
  templateUrl: './adminchollo.component.html',
  styleUrls: ['./adminchollo.component.css']
})
export class AdmincholloComponent {
  menu: number = 1;
  datos: any;
  id: any;
  form: any = {
    fecha: null,
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


  constructor(private serviciochollos: ChollosService, private serviciosgenerales: GeneralesService, private usuariosservice: UsuariosService, private tokenstorage: TokenStorageService) { }

  async creachollos() {

    this.serviciosgenerales.retornadato("viajes",this.form.viajes)
    .subscribe(result =>{
      this.Viajes.id=result.id
      console.log(result)
      console.log(this.Viajes)

      this.usuariosservice.retornarUsuario()
      .subscribe(result =>{
        this.Usuario.id=result.id
        console.log(result)
        console.log(this.Usuario)


            this.datos=this.form;
            this.form.viajes=this.Viajes
            this.form.usuario=this.Usuario
            console.log(this.form)

            this.serviciochollos.crearchollo(this.form)
            .subscribe(result =>this.datos=result)
            this.menu=0;
      })

    })

  }


mostrarmenu(numero: any) {
  this.menu = numero;
}

  buscachollo() {
    this.serviciochollos.retornarchollo(this.id)
      .subscribe(result => this.datos = result)
    this.menu = 1;
  }

  eliminarchollo(numero: any) {


    Swal.fire({
      title: '¿Quieres eliminar el chollo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'Eliminar el chollo'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'chollo eliminado',
          'El chollo ha sido eliminado',
          'success'
        );

        this.serviciochollos.deletechollo(numero)
        .subscribe(result => this.datos = result)
      this.menu = 0;


        }
      });





  }

  mostrarchollos() {
    this.menu = 2;
    this.serviciochollos.retornarchollos()
      .subscribe(result => this.datos = result)
  }
}
