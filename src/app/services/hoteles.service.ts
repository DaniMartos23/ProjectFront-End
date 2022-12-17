import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Hoteles } from '../interfases/hoteles';


@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = 'api/hoteles/';

  constructor(private http: HttpClient) { }

  getHoteless(): Observable<Hoteles[]> {
    return this.http.get<Hoteles[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getHoteles(id: number): Observable<Hoteles> {
    return this.http.get<Hoteles>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteHoteles(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addHoteles(Hoteles: Hoteles): Observable<Hoteles> {
    return this.http.post<Hoteles>(`${this.myAppUrl}${this.myApiUrl}`, Hoteles);
  }

  updateHoteles(id: number, Hoteles: Hoteles): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, Hoteles);
  }
}
