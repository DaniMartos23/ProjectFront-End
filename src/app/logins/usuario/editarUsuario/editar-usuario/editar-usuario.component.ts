import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
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
    @Inject(MAT_DIALOG_DATA) public injectData: UsuarioComponent){

    this.userData = injectData;
    this.form = this.userData;
    }

onSubmit(){
  console.log(this.userData.nombre)
}

}
