import { Component, OnInit } from '@angular/core';
import { Coupon, Restaurant, TopSeller } from 'src/app/interface';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  explore: Restaurant[] = [];
  coupons: Coupon[] = [];
  topSelling: TopSeller[] = [];

  data: any;
 
  constructor(private utils: UtilsService) { }

  ngOnInit() {
  this.explore = this.utils.getRestaurantList()
  this.coupons = this.utils.getcoupans();
  this.topSelling = this.utils.getTopSeller();
    this.data = this.explore[0]
  }

  onVegToggleChange(event: any) {
    console.log(event.detail)
   if(event.detail.checked == true){
      this.topSelling = this.topSelling.filter((item) => item.veg == true)
   }else {
  this.topSelling = this.utils.getTopSeller();
     
   }
  }
  onNonVegToggleChange(event:any){
    console.log(event.detail)
    if(event.detail.checked == true){
       this.topSelling = this.topSelling.filter((item) => item.veg == false)
     
    }else {
   this.topSelling = this.utils.getTopSeller();
      
    }
  }

}
