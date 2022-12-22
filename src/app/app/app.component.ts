import { Component,OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminCrud = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.tokenStorageService.getToken());

    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      //this.showAdminCrud = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
      console.log(this.username)
    }


  }

  logout(): void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
