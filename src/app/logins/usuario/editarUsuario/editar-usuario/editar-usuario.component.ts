import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';
import { UsuarioComponent } from '../../usuario.component';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  @Input() userData: any;

  form: any = {
    usuario: null,
    nombre: null,
    apellidos: null,
    correo: null,
    ciudad: null,
    fotoPerfil: null,
    fechaNacimiento: null
  }
  hide = true;

  constructor(private usuarioService: UsuariosService, private tokenStorage: TokenStorageService,
    public dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public injectData: UsuarioComponent){

    this.userData = injectData;
    this.form = this.userData;
    }




onSubmit(){

  Swal.fire({
    title: '¿Quieres actualizar el perfil de usuario?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'cancelar',
    confirmButtonText: 'Actualizar el perfil'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'actualizado!',
        'Su perfil ha sido actualizado',
        'success'
      )

      console.log(this.form)
      this.usuarioService.updateUser(this.form).subscribe(data => {
        this.onNoClick();
      });
    }


  })






}

onNoClick(): void {
  this.dialogRef.close();
}

}
