import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginWardGuard implements CanActivate {

  constructor(private tokenStorage: TokenStorageService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("messi");
      if (this.tokenStorage.getToken() == null) {
        console.log("NO MESSI");
        return this.router.navigate(['']).then(() => false);

      }
    return true;
  }

}
