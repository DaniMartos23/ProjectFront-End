import { Component,OnInit } from '@angular/core';
import { VuelosService } from '../services/vuelos.service';
@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {
  vuelos:any=null;

  constructor(private serviciovuelos: VuelosService){}

  ngOnInit(){
    this.serviciovuelos.retornarvuelos()
      .subscribe(result =>this.vuelos=result)
  }
}
