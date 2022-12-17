import { Component } from '@angular/core';

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

  tokenData: string | null = null;
  userData: any;

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

    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.authService.login(usuario, contrasena).subscribe(
      data => {

        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.tokenData = this.tokenStorage.getToken();
        this.userData = this.tokenStorage.getUser();

        this.datos();
        //this.reloadPage();

      }
    );

  }

  reloadPage(): void{
    window.location.reload();
  }

  datos(){
    console.log(this.tokenData);
    console.log(this.userData);
    console.log(this.roles);
  }


}
