import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private http: HttpClient) { }

  retornarvuelos(){
    return this.http.get("https://projectback-end-production-59f5.up.railway.app/api/vuelos");
  }
}
