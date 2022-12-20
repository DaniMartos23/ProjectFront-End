import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  private urlbase = 'https://projectback-end-production-59f5.up.railway.app/api/'
  constructor(private http: HttpClient) { }

  retornardatos(ruta: string){
    return this.http.get('${this.urlbase}/${ruta}');
  }

  retornadato(ruta:string,id:number){
    return this.http.get('${this.urlbase}/${ruta}/${id}');
  }

  creardatos(ruta:string,datos : Object){
    return this.http.post('${this.urlbase}/${ruta}',datos);
  }

  updatedatos(ruta:string,id:number, value: any){
    return this.http.put('${this.urlbase}/${ruta}/${id}',value);
  }

  deletedatos(ruta:string,id:number){
    return this.http.delete('${this.urlbase}/${ruta}/${id}',{responseType:'text'});
  }
}
