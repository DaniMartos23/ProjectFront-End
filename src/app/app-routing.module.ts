import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudHotelesComponent } from './crud-hoteles/crud-hoteles.component';
import { LoginsComponent } from './logins/logins.component';


const routes: Routes = [
  {path:'logins',component:LoginsComponent},
  {path:'crudhoteles',component:CrudHotelesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
