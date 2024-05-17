import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { filter } from 'rxjs';

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
  confirmationDialogService = inject(ConfirmationDialogService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/edit-product', id]);
  }

  onDelete(id: string) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true)) // Isso é para substituir o IF!!
      // Ele verifica se o que retorna do open dialog é true
      .subscribe((answer) => {
        // if (answer) {
        this.productsService.delete(id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => {
            this.products = products;
          });
        });
        // }
      });
  }
}
