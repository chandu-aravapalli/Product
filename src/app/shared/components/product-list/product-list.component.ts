import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  template: `
    <div class="product-list">
      <h2>Our Products</h2>
      <div class="loading" *ngIf="loading">Loading products...</div>
      <div class="error" *ngIf="error">{{ error }}</div>
      <div class="products-grid">
        <div *ngFor="let product of products" class="product-card-wrapper">
          <app-product-card
            [product]="product"
          ></app-product-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-list {
      padding: 20px;
    }
    
    h2 {
      color: #333;
      margin-bottom: 20px;
    }

    .loading, .error {
      text-align: center;
      padding: 20px;
      font-size: 1.1em;
    }

    .error {
      color: #dc3545;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px 0;
    }

    .product-card-wrapper {
      cursor: pointer;
      transition: transform 0.2s;
    }

    .product-card-wrapper:hover {
      transform: translateY(-5px);
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = '';
    
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }
} 