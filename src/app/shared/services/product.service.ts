import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'High-performance laptop for all your computing needs'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest smartphone with advanced features'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling wireless headphones'
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 299.99,
      description: 'Fitness tracking and notifications on your wrist'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    // Simulate HTTP request with delay
    return of(this.products).pipe(delay(500));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id)).pipe(delay(300));
  }
} 