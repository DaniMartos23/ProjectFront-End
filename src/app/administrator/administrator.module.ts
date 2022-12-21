import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator.component';
import { AdmincholloComponent } from './adminchollo/adminchollo.component';
import { AdminviajesComponent } from './adminviajes/adminviajes.component';
import { AdminvuelosComponent } from './adminvuelos/adminvuelos.component';
import { AdminhotelesComponent } from './adminhoteles/adminhoteles.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdministratorComponent,
    AdmincholloComponent,
    AdminviajesComponent,
    AdminvuelosComponent,
    AdminhotelesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AdministratorComponent,
    AdmincholloComponent,
    AdminviajesComponent,
    AdminvuelosComponent,
    AdminhotelesComponent
  ]
})
export class AdministratorModule { }
