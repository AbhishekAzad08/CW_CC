import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(postAction,modalComponent,dialogData) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;   
    dialogConfig.data=dialogData;
    this.dialog.afterAllClosed.subscribe(data=> postAction() )
    this.dialog.open(modalComponent , dialogConfig);
  }
}
