import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from 'rxjs';

const URL = "https://projectback-end-production-59f5.up.railway.app/api/reservas/"

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient, private tokenData: TokenStorageService) { }

  retornarReservasUsuario(): Observable<any>{
    return this.http.get("https://projectback-end-production-59f5.up.railway.app/api/usuarios/reservas/"+this.tokenData.getUser());
  }

  hacerReserva(datos : any): Observable<any>{
    console.log(datos.usuario.id);
    console.log(datos.chollo.id_chollo);
    return this.http.post("https://projectback-end-production-59f5.up.railway.app/api/reservas/post",  datos);
  }

  eliminarReserva(id : number): Observable<any>{
    return this.http.delete(URL+id);
  }

}
