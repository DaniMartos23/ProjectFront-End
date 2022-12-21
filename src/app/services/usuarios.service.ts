import { HttpClient,  } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService implements OnInit  {
  usuario: string = "";
  constructor(private http: HttpClient, private tokenData: TokenStorageService) { }
  ngOnInit(): void {
    this.usuario = this.tokenData.getUser();
    console.log(this.usuario);
  }

  retornarUsuario(): Observable<any>{
    this.usuario = this.tokenData.getUser();
    return this.http.get("https://projectback-end-production-59f5.up.railway.app/api/usuarios/perfil/"+this.usuario);
  }

  updateUser(data: any): Observable<any>{
    console.log(data);
    return this.http.put("https://projectback-end-production-59f5.up.railway.app/api/usuarios/perfil/"+this.usuario,data);
  }



}
