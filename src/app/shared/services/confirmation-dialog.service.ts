import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `<h2 mat-dialog-title>Deletar Produto</h2>
    <mat-dialog-content>
      Tem certeza que quer deletar esse produto?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button (click)="onClose()">Não</button>
      <button mat-flat-button (click)="onConfirm()" cdkFocusInitial>Sim</button>
    </mat-dialog-actions>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  dialogRef = inject(MatDialogRef);

  onClose() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor() {}

  dialog = inject(MatDialog);

  openDialog(): Observable<boolean> {
    return this.dialog.open(DialogAnimationsExampleDialog).afterClosed();
  }
}
