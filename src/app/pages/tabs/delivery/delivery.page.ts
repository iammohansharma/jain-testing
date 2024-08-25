import { Component, OnInit } from '@angular/core';
import { Brand, Cuisine, PastOrder, Restaurant, TrendingOffer } from 'src/app/interface';
import { UtilsService } from 'src/app/service/utils.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  topCuisines: Cuisine[] = [];
  bannerList:any;
  trendingOffers: TrendingOffer[] = [];
  popularBrands: Brand[] = [];
  orderHistory: PastOrder[] = [];
  explore: Restaurant[] = [];

  constructor(private utilsService: UtilsService) {

  }

  ngOnInit() {
    this.topCuisines = this.utilsService.getCuisines();
    this.bannerList = this.utilsService.getBanner();
    this.trendingOffers = this.utilsService.getTrendingOffers();
    this.popularBrands = this.utilsService.getPopularBrand();
    this.orderHistory = this.utilsService.getPastOrders();
    this.explore = this.utilsService.getRestaurantList();
  }

}
