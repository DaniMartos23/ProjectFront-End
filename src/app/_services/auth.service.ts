import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'https://projectback-end-production-59f5.up.railway.app/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario: string, contraseña: string): Observable<any>{
    return this.http.post(API_URL + 'login', {
      usuario,
      contraseña
      },httpOptions);
  }

  register(nombre:string, usuario: string, contraseña: string, correo:string, fotoPerfil:string): Observable<any>{
    return this.http.post(API_URL + 'api/usuarios/register', {
      nombre,
      usuario,
      contraseña,
      correo,
      fotoPerfil
      },httpOptions);
  }



}
