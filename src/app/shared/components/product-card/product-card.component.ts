import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="product-card">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price | currency }}</p>
      <p class="product-description">{{ product.description }}</p>
      <button class="details-button" [routerLink]="['/products', product.id]">More Details</button>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 20px;
      transition: transform 0.2s;
    }

    .product-name {
      color: #2c3e50;
      margin: 0 0 10px 0;
    }

    .product-price {
      color: #27ae60;
      font-size: 1.2em;
      font-weight: bold;
      margin: 10px 0;
    }

    .product-description {
      color: #666;
      margin: 10px 0;
      line-height: 1.4;
    }

    .details-button {
      background-color: #3498db;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 1em;
      padding: 8px 16px;
      transition: background-color 0.3s;
      width: 100%;
    }

    .details-button:hover {
      background-color: #2980b9;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
}