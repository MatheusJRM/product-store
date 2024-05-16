import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { filter } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: Product[] = [];
  productsService = inject(ProductsService);
  router = inject(Router);
  dialog = inject(MatDialog);
  matSnackBar = inject(MatSnackBar);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/edit-product', id]);
  }

  onDelete(id: string) {
    this.dialog
      .open(DialogAnimationsExampleDialog, {
        data: { id },
      })
      .afterClosed()
      .pipe(filter((answer: boolean) => answer === true))
      .subscribe(() => {
        this.productsService.delete(id).subscribe(() => {
          this.matSnackBar.open('Produto deletado com sucesso!', 'Ok', {
            panelClass: ['app-notification-success'],
          });
          this.productsService.getAll().subscribe((products) => {
            this.products = products;
          });
        });
      });
  }
}
