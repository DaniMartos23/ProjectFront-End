import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsComponent } from './logins.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginsRoutingModule } from './logins-routing.module';



@NgModule({
  declarations: [
    LoginsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginsRoutingModule
  ],
  exports:[
    LoginComponent,
    LoginsComponent,
    RegisterComponent
  ]
})
export class LoginsModule { }
