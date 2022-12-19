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
    this.serviciochollos.retornarchollos()
      .subscribe(result =>this.chollosmain=result)
  }
}
