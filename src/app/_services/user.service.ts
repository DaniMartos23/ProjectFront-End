import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'https://localhost:8181/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getAllContent(): Observable<any> {
    return this.http.get(API_URL, {responseType: 'text'});
  }


}
