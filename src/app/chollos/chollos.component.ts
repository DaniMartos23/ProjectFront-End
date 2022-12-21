import { Component, OnInit} from '@angular/core';
import { ChollosService } from '../services/chollos.service';

@Component({
  selector: 'app-chollos',
  templateUrl: './chollos.component.html',
  styleUrls: ['./chollos.component.css']
})
export class ChollosComponent implements OnInit{



  chollos:any=null;
  filtro:string = "";
  datosAux: Array<any> = new Array();


  constructor(private serviciochollos: ChollosService){}

  ngOnInit(){
    this.CargarDatos();
  }

  CargarDatos(){

      this.serviciochollos.retornarchollos()
        .subscribe(result =>{


          if(this.filtro != "")
          {
            this.datosAux = new Array();
            console.log("dentro");

            for (let index = 0; index < result.length; index++) {
              if(result[index].viajes.destino.toLowerCase() == this.filtro)
              {
                this.datosAux.push(result[index]);
                console.log(this.datosAux);
              }

            }


          }else{
            this.datosAux = result;
            console.log(this.datosAux);
          }
          this.chollos= this.datosAux;


    });

  }


recargar(destinoFilter: string){

  if(destinoFilter == "") this.filtro = "";
  this.filtro =  destinoFilter.toLowerCase();
  console.log(this.filtro)
  this.CargarDatos();
}

}
