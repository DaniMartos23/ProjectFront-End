import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsComponent } from './logins.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginsRoutingModule } from './logins-routing.module';

import { UsuarioComponent } from './usuario/usuario.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditarUsuarioComponent } from './usuario/editarUsuario/editar-usuario/editar-usuario.component';
import { AppModule } from "../app.module";






@NgModule({
    declarations: [
        LoginsComponent,
        LoginComponent,
        RegisterComponent,
        UsuarioComponent,
        EditarUsuarioComponent
    ],
    exports: [
        LoginComponent,
        LoginsComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        LoginsRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class LoginsModule { }
