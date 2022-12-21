import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { TokenStorageService } from '../_services/token-storage.service';
import { RegisterComponent } from './register/register.component';


@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent {

  registerDialog = true;
  constructor(public dialog: MatDialog, public tokenData: TokenStorageService) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "65%"
    dialogConfig.enterAnimationDuration = "400ms";
    dialogConfig.exitAnimationDuration = "1200ms";
    this.dialog.open(RegisterComponent);

  }

  openOtherDialog(){
    this.registerDialog = !this.registerDialog;
  }

}
