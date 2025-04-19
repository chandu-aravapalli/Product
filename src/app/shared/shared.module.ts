import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ProductCardComponent  // Make sure this is exported
  ]
})
export class SharedModule { }