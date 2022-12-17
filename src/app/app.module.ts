import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ElementsModule } from './elements/elements.module';
import { LoginsModule } from './logins/logins.module';
//componentes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChollosComponent } from './chollos/chollos.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    ChollosComponent,
    VuelosComponent,
    ViajesComponent,
    ReservasComponent
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
