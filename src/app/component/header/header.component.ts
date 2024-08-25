import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() showLocation: boolean = false;
  @Input() showBackButton: boolean = false;
  cartNumber: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to cart changes
    this.cartService.cart$.subscribe(cart => {
      this.cartNumber = cart.length; // Update cart number when cart changes
    });

    console.log('Cart service', this.cartService.getCart());
  }

}
