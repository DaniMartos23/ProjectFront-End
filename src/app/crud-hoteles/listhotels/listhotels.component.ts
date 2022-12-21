import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hoteles } from 'src/app/interfases/hoteles';
import { HotelesService } from 'src/app/services/hoteles.service';


@Component({
  selector: 'app-listhotels',
  templateUrl: './listhotels.component.html',
  styleUrls: ['./listhotels.component.css']
})
export class ListHotelsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Hoteles>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,
            private _hotelesService:HotelesService) { }

  ngOnInit(): void {
    this.obtenerHoteles();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerHoteles() {

    this.loading = true;
    this._hotelesService.getHoteless().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    })
  }


  eliminarHoteles(id: number) {
    this.loading = true;

    this._hotelesService.deleteHoteles(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerHoteles();
    });
  }

  mensajeExito() {
    this._snackBar.open('El hotel fue eliminada con exito','', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }

}
