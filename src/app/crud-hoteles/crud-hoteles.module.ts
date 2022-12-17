import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditHotelsComponent } from './add-edit-hotels/add-edit-hotels.component';
import { ListHotelsComponent } from './listhotels/listhotels.component';
import { SeeHotelsComponent } from './seehotels/seehotels.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddEditHotelsComponent,
    ListHotelsComponent,
    SeeHotelsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AddEditHotelsComponent,
    ListHotelsComponent,
    SeeHotelsComponent
  ]
})
export class CrudHotelesModule { }
