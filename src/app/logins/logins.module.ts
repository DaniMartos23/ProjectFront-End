import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsComponent } from './logins.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginsRoutingModule } from './logins-routing.module';
<<<<<<< HEAD
import { UsuarioComponent } from './usuario/usuario.component';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 01c07bdf5de0920bd70a4ae7491dedea9a254f5d



@NgModule({
  declarations: [
    LoginsComponent,
    LoginComponent,
    RegisterComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    LoginsRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    LoginsComponent,
    RegisterComponent
  ]
})
export class LoginsModule { }
