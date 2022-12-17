import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginsComponent } from './logins/logins.component';


import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TermsComponent } from "./terms/terms.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { CrudHotelesModule } from './crud-hoteles/crud-hoteles.module';




const routes: Routes = [
  {path:'logins',component:LoginsComponent},
  {path:'crudhoteles',component: CrudHotelesModule},
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
