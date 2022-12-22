import { Component,OnInit } from '@angular/core';
import { ChollosService } from '../services/chollos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chollosmain:any=null;

  constructor(private serviciochollos: ChollosService){}

  ngOnInit(){
    const aux: Array<any> = new Array();
    this.serviciochollos.retornarchollos()
      .subscribe(result =>{

        for (let index = 0; index < 4; index++) {
          aux[index] = result[index];

        }

          this.chollosmain = aux;
          console.log(this.chollosmain);
      })
  }
}
