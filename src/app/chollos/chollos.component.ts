import { Component, OnInit} from '@angular/core';
import { ChollosService } from '../services/chollos.service';

@Component({
  selector: 'app-chollos',
  templateUrl: './chollos.component.html',
  styleUrls: ['./chollos.component.css']
})
export class ChollosComponent implements OnInit{
  chollos:any=null;

  constructor(private serviciochollos: ChollosService){}

  ngOnInit(){
    this.serviciochollos.retornarchollos()
      .subscribe(result =>{
        this.chollos= result
      console.log(this.chollos)
  });
  }
}
