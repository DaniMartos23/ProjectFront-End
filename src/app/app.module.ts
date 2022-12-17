import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { ElementsModule } from './elements/elements.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

import { AppComponent } from './app/app.component';
import { LoginsModule } from './logins/logins.module';
//componentes
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChollosComponent } from './chollos/chollos.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ReservasComponent } from './reservas/reservas.component';
=======
import { AddEditHotelsComponent } from './crud-hoteles/add-edit-hotels/add-edit-hotels.component';
import { ListHotelsComponent } from './crud-hoteles/listhotels/listhotels.component';
import { SeeHotelsComponent } from './crud-hoteles/seehotels/seehotels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

>>>>>>> 01c07bdf5de0920bd70a4ae7491dedea9a254f5d

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
<<<<<<< HEAD
    ChollosComponent,
    VuelosComponent,
    ViajesComponent,
    ReservasComponent
=======
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    AddEditHotelsComponent,
    ListHotelsComponent,
    SeeHotelsComponent
>>>>>>> 01c07bdf5de0920bd70a4ae7491dedea9a254f5d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    LoginsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
