import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productService = inject(ProductsService);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok', {
        panelClass: ['app-notification-success'],
      });
      this.router.navigateByUrl('/').catch((e) => {
        console.log(e);
      });
    });
  }
}
