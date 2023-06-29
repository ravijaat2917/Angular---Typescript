import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  componentName = 'Cart Component';
  btnDisabled = true;
  item = '';
  cart: any = [];

  constructor() {
    setTimeout(() => {
      this.btnDisabled = false;
    }, 1000);
  }

  getItem(e: any) {
    console.log(e.target.value);
    this.item = e.target.value;
  }

  addToCart() {
    this.cart.push(this.item);
    this.item = '';
  }
}
