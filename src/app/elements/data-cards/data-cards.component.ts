
import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {
    @Input() dataChollos:any;

    constructor(){}


    ngOnInit(): void {
      console.log(this.dataChollos)
    }
}
