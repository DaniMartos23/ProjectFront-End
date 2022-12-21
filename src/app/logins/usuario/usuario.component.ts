import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { usuario } from 'src/app/interfases/usuario';
import { ReservasService } from 'src/app/services/reservas.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { EditarUsuarioComponent } from './editarUsuario/editar-usuario/editar-usuario.component';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit  {

  EditDialog = true;
  profileData = <usuario>{};
  reservas: any;

  constructor(private UsuarioService: UsuariosService, public tokenData: TokenStorageService,  public dialog: MatDialog,  public reservaService: ReservasService){}



  ngOnInit(): void {
   this.UsuarioService.retornarUsuario().subscribe(data =>{
    this.profileData = data;
    console.log(this.profileData);
   });

   this.reservaService.retornarReservasUsuario().subscribe(data =>{
    this.reservas = data;
    console.log(this.reservas);
   })



  }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();


    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "65%"
    dialogConfig.enterAnimationDuration = "400ms";
    dialogConfig.exitAnimationDuration = "1200ms";

    this.dialog.open(EditarUsuarioComponent,{data: {
      usuario: this.profileData.usuario,
      nombre: this.profileData.nombre,
      apellidos: this.profileData.apellidos,
      correo: this.profileData.correo,
      ciudad: this.profileData.ciudad,
      fotoPerfil: this.profileData.fotoPerfil,
      fechaNacimiento: this.profileData.fechaNacimiento
    }});
  }

  openOtherDialog(){
    this.EditDialog = !this.EditDialog;

  }

  logout(){

    Swal.fire({
      title: 'Estas seguro?',
      text: "deseas desconectarte?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, desconectarme'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }


}




