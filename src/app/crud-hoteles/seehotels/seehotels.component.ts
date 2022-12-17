import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hoteles } from 'src/app/interfases/hoteles';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-seehotels',
  templateUrl: './seehotels.component.html',
  styleUrls: ['./seehotels.component.css']
})
export class SeeHotelsComponent implements OnInit, OnDestroy {
  id!: number;
  hoteles!: Hoteles;
  loading: boolean = false;

  routeSub!: Subscription;

  /*   hoteles$!: Observable<Hoteles> -- PIPE ASYNC */

  constructor(private _hotelesService: HotelesService,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    this.obtenerHoteles();
  }

  ngOnDestroy(): void {

  }

  obtenerHoteles() {
    this.loading = true;
    this._hotelesService.getHoteles(this.id).subscribe(data => {
      this.hoteles = data;
      this.loading = false;
    })
  }

}
