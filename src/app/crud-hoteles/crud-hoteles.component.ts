import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AddEditHotelsComponent } from './crud-hoteles/add-edit-hotels/add-edit-hotels.component';
import { ListHotelsComponent } from './crud-hoteles/listhotels/listhotels.component';
import { SeehotelsComponent } from './crud-hoteles/seehotels/seehotels.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditHotelsComponent,
    ListHotelsComponent,
    SeehotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
