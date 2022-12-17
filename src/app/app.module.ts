import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ElementsModule } from './elements/elements.module';
import { LoginsModule } from './logins/logins.module';
//componentes
import { AddEditHotelsComponent } from './crud-hoteles/add-edit-hotels/add-edit-hotels.component';
import { ListHotelsComponent } from './crud-hoteles/listhotels/listhotels.component';
import { SeehotelsComponent } from './crud-hoteles/seehotels/seehotels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddEditHotelsComponent,
    ListHotelsComponent,
    SeehotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    LoginsModule,
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
