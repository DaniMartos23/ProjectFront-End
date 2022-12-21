import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private Route: Router) { }

  signOut(): void{
    localStorage .clear();
  }

  public saveToken(token: string): void{
    console.log(token);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string| null{
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void{
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return{};
  }

  public logout(): void {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);

    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Cierre de sesión correcto',
      showConfirmButton: false,
      timer: 1500
    })


  }


}
