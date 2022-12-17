import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SearchBarComponent,
    DataCardsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SearchBarComponent,
    DataCardsComponent,

  ]
})
export class ElementsModule { }
