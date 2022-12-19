import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {
    @Input() cardimage:any;
    @Input() carddescription:any;
    @Input() cardtitle:any;

    constructor(){
      this.cardimage='';
      this.carddescription='';
      this.cardtitle='';
    }

    ngOnInit(): void {

    }
}
