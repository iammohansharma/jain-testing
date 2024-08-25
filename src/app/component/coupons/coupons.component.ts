import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/interface';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent  implements OnInit {

  @Input() Items: Coupon[] = []; 
  constructor() { }

  ngOnInit() {}

}
