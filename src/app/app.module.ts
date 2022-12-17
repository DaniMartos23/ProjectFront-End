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
import { FormsModule } from '@angular/forms';


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
    LoginsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
