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

import { ChollosComponent } from './chollos/chollos.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ReservasComponent } from './reservas/reservas.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from './shared/shared.module';

import { LoginsComponent } from './logins/logins.component';
import { authInterceptorProvider } from './_helper/auth-interceptor.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { TestServiciosComponent } from './test-servicios/test-servicios.component';
import { AdministratorModule } from './administrator/administrator.module';

import { RemoveBlankSpacePipe } from './pipes/remove-blank-space.pipe';
import { DataCardsComponent } from './elements/data-cards/data-cards.component';





@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ChollosComponent,
    VuelosComponent,
    ViajesComponent,
    ReservasComponent,
    AboutComponent,
    PrivacyComponent,

    TermsComponent,
    TestServiciosComponent,

    TermsComponent


  ],imports: [
    BrowserModule,

    AdministratorModule,

    AppRoutingModule,
    ElementsModule,
    LoginsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    SharedModule
  ],exports:[],

  entryComponents: [LoginsComponent],
  providers: [authInterceptorProvider, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
