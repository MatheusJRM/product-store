import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product/:id',
    loadComponent: () =>
      import('./features/edit/edit.component').then((m) => m.EditComponent),
    resolve: {
      product: (route: ActivatedRouteSnapshot) => {
        const productService = inject(ProductsService);
        return productService.getById(route.params['id']);
      },
    },
  },
];
