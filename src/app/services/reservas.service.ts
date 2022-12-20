import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient, private tokenData: TokenStorageService) { }

  retornarreservas(){

    return this.http.get("https://projectback-end-production-59f5.up.railway.app/api/usuarios/reservas/"+this.tokenData.getUser());
  }

}
