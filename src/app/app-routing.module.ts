import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginsComponent } from './logins/logins.component';


import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TermsComponent } from "./terms/terms.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { CrudHotelesModule } from './crud-hoteles/crud-hoteles.module';
import { ChollosComponent } from './chollos/chollos.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ViajesComponent } from './viajes/viajes.component';
import { UsuarioComponent } from './logins/usuario/usuario.component';
import { LoginWardGuard } from './_guards/login-ward.guard';
import { AdministratorComponent } from './administrator/administrator.component';




const routes: Routes = [
  {path:'logins',component:LoginsComponent},
  {path:'crudhoteles',component: CrudHotelesModule},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'chollos', component: ChollosComponent},
  {path: 'vuelos', component: VuelosComponent},
  {path: 'perfil',canActivate: [LoginWardGuard], component: UsuarioComponent},
  {path: 'viajes',component: ViajesComponent},
  {path: 'administrator',component: AdministratorComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
