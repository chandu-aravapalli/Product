import { Routes } from '@angular/router';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '/products' } // Catch all route
];
