import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="product-detail">
      <button class="back-button" routerLink="/products">← Back to Products</button>
      
      <div class="loading" *ngIf="loading">Loading product details...</div>
      <div class="error" *ngIf="error">{{ error }}</div>
      
      <div class="product-info" *ngIf="product && !loading">
        <div class="product-header">
          <h2>{{ product.name }}</h2>
          <div class="price">{{ product.price | currency }}</div>
        </div>

        <div class="product-content">
          <div class="product-section">
            <h3>Product Description</h3>
            <p class="description">{{ product.description }}</p>
          </div>

          <div class="product-section">
            <h3>Product Details</h3>
            <ul class="details-list">
              <li><strong>Product ID:</strong> {{ product.id }}</li>
              <li><strong>Price:</strong> {{ product.price | currency }}</li>
              <li><strong>Availability:</strong> In Stock</li>
            </ul>
          </div>

          <div class="product-section">
            <h3>Key Features</h3>
            <ul class="features-list">
              <li>High-quality product</li>
              <li>Durable construction</li>
              <li>Premium materials</li>
              <li>1-year warranty</li>
            </ul>
          </div>

          <div class="action-section">
            <button class="add-to-cart" (click)="onAddToCart()">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-detail {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }

    .back-button {
      background: none;
      border: none;
      color: #2c3e50;
      cursor: pointer;
      font-size: 1.1em;
      margin-bottom: 20px;
      padding: 10px 0;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .back-button:hover {
      color: #3498db;
    }

    .loading, .error {
      text-align: center;
      padding: 20px;
      font-size: 1.1em;
    }

    .error {
      color: #dc3545;
    }

    .product-info {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .product-header {
      background-color: #f8f9fa;
      padding: 20px;
      border-bottom: 1px solid #e9ecef;
    }

    .product-header h2 {
      color: #2c3e50;
      margin: 0;
      font-size: 2em;
    }

    .price {
      color: #27ae60;
      font-size: 1.8em;
      font-weight: bold;
      margin-top: 10px;
    }

    .product-content {
      padding: 20px;
    }

    .product-section {
      margin-bottom: 30px;
    }

    .product-section h3 {
      color: #2c3e50;
      font-size: 1.3em;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e9ecef;
    }

    .description {
      color: #666;
      line-height: 1.6;
      font-size: 1.1em;
    }

    .details-list, .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .details-list li, .features-list li {
      padding: 8px 0;
      color: #666;
      font-size: 1.1em;
    }

    .features-list li {
      padding-left: 20px;
      position: relative;
    }

    .features-list li:before {
      content: "✓";
      color: #27ae60;
      position: absolute;
      left: 0;
    }

    .action-section {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e9ecef;
    }

    .add-to-cart {
      background-color: #27ae60;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 1.2em;
      padding: 15px 30px;
      transition: background-color 0.3s;
      width: 100%;
    }

    .add-to-cart:hover {
      background-color: #219a52;
    }

    @media (max-width: 768px) {
      .product-detail {
        padding: 10px;
      }

      .product-header h2 {
        font-size: 1.5em;
      }

      .price {
        font-size: 1.5em;
      }
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params.pipe(
      switchMap(params => this.productService.getProductById(+params['id']))
    ).subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
        } else {
          this.error = 'Product not found';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load product details. Please try again later.';
        this.loading = false;
        console.error('Error loading product:', err);
      }
    });
  }

  onAddToCart(): void {
    if (this.product) {
      console.log('Product added to cart:', this.product);
      // TODO: Implement cart functionality
    }
  }
} 