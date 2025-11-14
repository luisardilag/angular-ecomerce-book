import { Product } from './../product';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web Camera' },
    { id: 4, title: 'Tablet' }
  ];

  currentClasses = {
    start: true,
    active: false
  }

  selectedProduct: Product | undefined;

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
