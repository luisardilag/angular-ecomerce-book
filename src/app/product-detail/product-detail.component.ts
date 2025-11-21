import { Component, input, output, OnInit, OnDestroy, OnChanges, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product = input<Product>();
  added = output<Product>();

  constructor() {
    console.log('Product:', this.product());
  }

  ngOnInit(): void {
    console.log('Product:', this.product());
  }

  ngOnDestroy(): void {
    console.log('Destroying Product Detail Component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;

      console.log(`Product changed from ${oldValue.title} to ${newValue.title}`);
    }

  }

  addToCart() {
    this.added.emit(this.product()!);
  };

  get productTitle() {
    return this.product()?.title;
  }
}
