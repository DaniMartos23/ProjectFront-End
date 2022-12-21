import { Component, EventEmitter, Output } from '@angular/core';


const input = document.getElementById('destino') as HTMLInputElement | null;


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})



export class SearchBarComponent {

  @Output() destinoFilter = new EventEmitter<string>();


  enviarDestinoData(data: string){
    this.destinoFilter.emit(data);
  }


}
