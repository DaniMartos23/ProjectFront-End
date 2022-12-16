import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DataCardsComponent } from './components/data-cards/data-cards.component';



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
