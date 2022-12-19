import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

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

  constructor(private authService: AuthService){}


  onSubmit(){


    const{usuario,nombre,contrasena,email} = this.form;

    console.log()
    this.authService.register(nombre,usuario,contrasena,email).subscribe(
      data =>{
        console.log(data);
        this.isSucessful = true;
        this.isSingUpFailed = false;
      }
    );
  }












}
