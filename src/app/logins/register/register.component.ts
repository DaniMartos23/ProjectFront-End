import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';


const IMG = "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  hide = true;

  form: any = {
    usuario: null,
    nombre: null,
    contrasena: null,
    email: null
  }

  isSucessful = false;
  isSingUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public dialogRef: MatDialogRef<RegisterComponent>){}


  onSubmit(){


    const{usuario,nombre,contrasena,email} = this.form;

    console.log()
    this.authService.register(nombre,usuario,contrasena,email,IMG).subscribe(
      data =>{
        console.log(data);
        this.isSucessful = true;
        this.isSingUpFailed = false;

        this.authService.login(usuario,contrasena).subscribe(data =>{

          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(usuario);



          Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Te has registrado correctamente',
            showConfirmButton: false,
            timer: 1500
          })

              this.dialogRef.close();



        });
      }
    );
  }












}
