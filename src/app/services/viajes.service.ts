import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private http: HttpClient) { }

  retornarviajes(){
    return this.http.get("https://projectback-end-production-59f5.up.railway.app/api/viajes");
  }
}
