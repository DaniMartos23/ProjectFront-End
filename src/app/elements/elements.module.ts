import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DataCardsComponent } from './data-cards/data-cards.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SearchBarComponent,
    DataCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    SearchBarComponent,
    DataCardsComponent
  ]
})
export class ElementsModule { }
