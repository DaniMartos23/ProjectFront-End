import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user'
const USER_ROLE = 'user-role'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private route: Router) { }

  signOut(): void{
    localStorage .clear();
  }

  public saveToken(token: string): void{

    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);


  }

  public getRole(): string| null{
    return localStorage.getItem(USER_ROLE);
  }
  public getToken(): string| null{
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void{
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    if(user == "login"){
      localStorage.removeItem(USER_ROLE);
      localStorage.setItem(USER_ROLE, "ROLE_ADMIN");
    }
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
    localStorage.removeItem(USER_ROLE);

    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Cierre de sesión correcto',
      showConfirmButton: false,
      timer: 1500
    })
    this.route.navigateByUrl('/home')

  }


}
