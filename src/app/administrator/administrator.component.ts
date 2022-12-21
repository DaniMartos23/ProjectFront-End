import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  editor:number

  constructor(){
    this.editor=0
  }

  cambiaeditor(numero: any){
    this.editor=numero;
  }
}
