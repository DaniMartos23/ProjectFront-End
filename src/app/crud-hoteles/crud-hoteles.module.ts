import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditHotelsComponent } from './add-edit-hotels/add-edit-hotels.component';
import { ListHotelsComponent } from './listhotels/listhotels.component';
import { SeeHotelsComponent } from './seehotels/seehotels.component';



@NgModule({
  declarations: [
    AddEditHotelsComponent,
    ListHotelsComponent,
    SeeHotelsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrudHotelesModule { }
