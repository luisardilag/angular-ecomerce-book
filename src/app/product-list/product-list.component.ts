import { Product } from './../product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title = 'world';
  products: Product[] = [
    { id: 1, title: 'Keyboard'},
    { id: 2, title: 'Microphone'},
    { id: 3, title: 'Web Camera'},
    { id: 4, title: 'Tablet'}
  ];

  currentClasses = {
    start: true,
    active: false
  }
}
