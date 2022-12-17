import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrudHotelesComponent } from './crud-hoteles/crud-hoteles.component';
import { LoginsComponent } from './logins/logins.component';


import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TermsComponent } from "./terms/terms.component";
import { PrivacyComponent } from "./privacy/privacy.component";




const routes: Routes = [
  {path:'logins',component:LoginsComponent},
  {path:'crudhoteles',component:CrudHotelesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
