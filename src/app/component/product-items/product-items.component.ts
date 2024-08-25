import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/card.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss'],
})
export class ProductItemsComponent  implements OnInit {

  @Input() Items = <any>[];
  CartList:any;
  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.cartList();
   console.log(this.CartList)
  }
  cartList(){
    this.CartList =  this.cartservice.getCart();
  }
 async addToCart(value:any){
    console.log(value)
    await this.cartservice.addToCart(value);
    this.cartList(); // Update the cart list immediately

  }

  checkAlreadyExist(name: string): boolean {
    return this.CartList.some((item: any) => item.name === name);
  }

  removeToCart(value:any){
    this.cartservice.removeFromCart(value.name)
    this.cartList();
  }
}
