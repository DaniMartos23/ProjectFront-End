import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from '../app/app.component';
import {  HttpClientModule} from '@angular/common/http';
import { ElementsModule } from '../elements/elements.module';
import { LoginsModule } from '../logins/logins.module';
import { HomeComponent } from '../home/home.component';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    LoginsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
