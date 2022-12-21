import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  private urlbase = 'https://projectback-end-production-59f5.up.railway.app/api/'
  constructor(private http: HttpClient) { }

  retornardatos(ruta: string):Observable<any>{
    return this.http.get(this.urlbase+ruta);
  }

  retornadato(ruta:string,id:number):Observable<any>{
    return this.http.get(this.urlbase+ruta+'/'+id);
  }

  creardatos(ruta:string,datos : Object):Observable<any>{
    return this.http.post(this.urlbase+ruta,datos);
  }

  updatedatos(ruta:string,id:number, value: any):Observable<any>{
    return this.http.put(this.urlbase+ruta+'/'+id,value);
  }

  deletedatos(ruta:string,id:number):Observable<any>{
    return this.http.delete(this.urlbase+ruta+'/'+id,{responseType:'text'});
  }
}
