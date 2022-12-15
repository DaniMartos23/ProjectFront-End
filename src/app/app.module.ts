import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ElementsModule } from './elements/elements.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
