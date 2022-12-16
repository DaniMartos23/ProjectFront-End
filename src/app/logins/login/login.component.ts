import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    usuario: null,
    contrasena: null
  }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles:string[] = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService){}

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

  }

  onSubmit(): void{
    const {usuario, contrasena } = this.form;
    console.log(usuario, contrasena);

    this.authService.login(usuario, contrasena).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();

      }
    );

  }

  reloadPage(): void{
    window.location.reload();
  }


}
