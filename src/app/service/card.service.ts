import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  productName: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);

  cart$ = this.cartSubject.asObservable(); // Observable to allow subscription

  addToCart(item: CartItem) {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.cartSubject.next(this.cart); // Update the cart observable
    console.log(this.cart);
  }

  removeFromCart(name: string) {
    this.cart = this.cart.filter(item => item.name !== name);
    this.cartSubject.next(this.cart); // Update the cart observable after removal
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart); // Update the cart observable after clearing
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
