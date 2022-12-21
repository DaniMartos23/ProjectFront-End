import { Component,OnInit } from '@angular/core';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  reservas:any=null;

  constructor(private servicioreservas: ReservasService){}

  ngOnInit(){
    this.servicioreservas.retornarReservasUsuario()
      .subscribe(result => {
        this.reservas = result
        console.log(result)
      })
  }
}
