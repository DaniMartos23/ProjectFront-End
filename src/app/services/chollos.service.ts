import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChollosService {

  private urlbase:string='https://projectback-end-production-59f5.up.railway.app/api/chollos';
  constructor(private http: HttpClient) { }

  retornarchollos():Observable<any>{
    return this.http.get(this.urlbase);
  }

  retornarchollo(id:number):Observable<any>{
    return this.http.get(this.urlbase+'/'+id);
  }

  crearchollo(datos : Object):Observable<any>{
    return this.http.post(this.urlbase,datos);
  }

  updatechollo(id:number, value: any):Observable<any>{
    return this.http.put(this.urlbase+'/'+id,value);
  }

  deletechollo(id:number):Observable<any>{
    return this.http.delete(this.urlbase+'/'+id,{responseType:'text'});
  }

  retornachollopais(pais:string):Observable<any>{
    return this.http.get(this.urlbase+'/'+pais);
  }


}

