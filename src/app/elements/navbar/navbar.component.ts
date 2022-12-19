import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginsComponent } from 'src/app/logins/logins.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(public dialog: MatDialog, public tokenData: TokenStorageService) {}

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%"
    dialogConfig.enterAnimationDuration = "400ms";
    dialogConfig.exitAnimationDuration = "1200ms";

    this.dialog.open(LoginsComponent);
  }



}
