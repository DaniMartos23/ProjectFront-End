import { Component,OnInit } from '@angular/core';
import { ViajesService } from '../services/viajes.service';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent {
  viajes:any=null;

  constructor(private servicioviajes: ViajesService){}

  ngOnInit(){
    this.servicioviajes.retornarviajes()
      .subscribe(result =>this.viajes=result)
  }
}
