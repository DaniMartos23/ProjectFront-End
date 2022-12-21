import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    public dialogRef: MatDialogRef<LoginComponent>, private router: Router){}

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
  hide = true;


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

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(usuario);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.tokenData = this.tokenStorage.getToken();
        this.userData = this.tokenStorage.getUser();

        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'Has iniciado sesión correctamente',
          showConfirmButton: false,
          timer: 1500
        })

            this.dialogRef.close();




      }
    );

  }




}
