import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService){}


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
          window.location.reload();
        });
      }
    );
  }












}
