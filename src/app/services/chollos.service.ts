import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChollosService {

  private urlbase='https://projectback-end-production-59f5.up.railway.app/api/chollos';
  constructor(private http: HttpClient) { }

  retornarchollos(){
    return this.http.get('{this.urlbase}');
  }

  retornarchollo(id:number){
    return this.http.get('${this.urlbase}/${id}');
  }

  crearchollo(datos : Object){
    return this.http.post('${this.urlbase}',datos);
  }

  updatechollo(id:number, value: any){
    return this.http.put('${this.urlbase}/${id}',value);
  }

  deletechollo(id:number){
    return this.http.delete('${this.urlbase}/${id}',{responseType:'text'});
  }

  retornachollopais(pais:string){
    return this.http.get('${this.urlbase}/${pais}');
  }


}

