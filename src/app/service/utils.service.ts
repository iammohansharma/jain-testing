import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getCuisines() {
    const getTopCuisines = [
      {
        image: 'assets/items/pizza.png',
        name: 'Pizza'
      },
      {
        image: 'assets/items/bakery.png',
        name: 'Bakery'
      },
      {
        image: 'assets/items/chinese.png',
        name: 'Chinese'
      },
      {
        image: 'assets/items/burger.png',
        name: 'Burger'
      }, {
        image: 'assets/items/burger.png',
        name: 'Burger'
      },
      {
        image: 'assets/items/pizza.png',
        name: 'Pizza'
      },
      {
        image: 'assets/items/bakery.png',
        name: 'Bakery'
      },
      {
        image: 'assets/items/chinese.png',
        name: 'Chinese'
      },
      {
        image: 'assets/items/burger.png',
        name: 'Burger'
      }, {
        image: 'assets/items/burger.png',
        name: 'Burger'
      }

    ]
    return getTopCuisines
  }
  getBanner() {
    const banner = ['assets/banner/banner.png', 'assets/banner/banner.png', 'assets/banner/banner.png'];
    return banner;
  }
  getTrendingOffers() {
    const offersImage = [{
      image: 'assets/trending-offers/trending-offers.png',
      discount: '25'
    },
    {
      image: 'assets/trending-offers/trending-offers.png',
      discount: '20'
    },
    {
      image: 'assets/trending-offers/trending-offers.png',
      discount: '5'
    },
    {
      image: 'assets/trending-offers/trending-offers.png',
      discount: '20'
    },
    {
      image: 'assets/trending-offers/trending-offers.png',
      discount: '5'
    },
  ]
    return offersImage;
  }
  getPopularBrand() {
    const brands = [
      {
        image: 'assets/brands/macd.png',
        duration: '32 mins',
        name: 'Mc Donalds'
      },
      {
        image: 'assets/brands/domins.png',
        duration: '30 mins',
        name: 'Mc Donalds'
      },
      {
        image: 'assets/brands/baskin.png',
        duration: '22 mins',
        name: 'Mc Donalds'
      },
      {
        image: 'assets/brands/macd.png',
        duration: '12 mins',
        name: 'Mc Donalds'
      },
      {
        image: 'assets/brands/domins.png',
        duration: '25',
        name: 'Mc Donalds'
      }
    ];
    return brands;
  }

  getPastOrders() {
    const pastOrder = [
      {
        image: 'assets/trending-offers/trending-offers.png',
        duration: '25 mins',
        rating: 5.5,
        more: '20% off upto 150',
        name: 'Silhoutte'
      },
      {
        image: 'assets/trending-offers/trending-offers.png',
        duration: '25 mins',
        rating: 5.5,
        more: 'Free Delivery',
        name: 'Silhoutte'
      },
      {
        image: 'assets/trending-offers/trending-offers.png',
        duration: '25 mins',
        rating: 5.5,
        more: '10% off',
        name: 'Silhoutte'
      },
      {
        image: 'assets/trending-offers/trending-offers.png',
        duration: '25 mins',
        rating: 5.5,
        more: 'Flat Rs.100 off ',
        name: 'Silhoutte'
      }
    ];
    return pastOrder;
  }

  getRestaurantList() {
    const resturantList = [
      {
        name: 'BYG Brewski',
        image: 'assets/explore/explore.png',
        rating: 4.5,
        location: 'Indiranagar',
        comboDiscount: '₹ 250 for two',
        speciality: 'Continental, Asian, Italian',
        offer: 'Discount On Delivery',
        review: '128+ people have ordered from this place',
        distance: '0.6 km',
        discount: 25,
        openingTime: 'Closes in 30min'
      }
    ]
    return resturantList;
  }
  getcoupans() {
    const coupans = [
      {
        name: 'Deals',
        offers: 'FLAT Rs. 75 off',
        details: 'Upto 100 rs off | Use code TIPLRFF'
      },
      // {
      //   name: 'Offers',
      //   offers: 'BUY 1 GET 1 free',
      //   details: 'On Main course only | Use code TIPLR12'
      // },
      // {
      //   name: 'Offers',
      //   offers: 'BUY 3 GET 4 free',
      //   details: 'Upto 100 rs off | Use code TIPLRFF'
      // },
      // {
      //   name: 'Deals',
      //   offers: 'FLAT 20% off',
      //   details: 'Upto 100 rs off | Use code TIPLRFF'
      // }
    ];
    return coupans;
  }

  getTopSeller(){
    const topSeller = [
      {
        name:'Margherita Pizza',
        badge: 'Bestseller',
        veg: true,
        desc: 'Freshly baked bread topped with tomato sauce, mozerella cheese, and basil. Serves two',
        discount:'20% Off',
        price:'₹290',
        cutdownPrice: '₹270',
        image:'assets/images/pizza.png',
      },
      {
        name:'Pepperoni Inferno',
        badge: 'Bestseller',
        veg: false,
        desc: 'Freshly baked bread topped with tomato sauce, mozerella cheese, and basil. Serves two',
        discount:'20% Off',
        price:'₹290',
        image:'assets/images/pizza.png',
      },
      {
        name:'BBQ Chicken Delight',
        badge: 'Bestseller',
        veg: true,
        desc: 'Juicy grilled chicken, tangy BBQ sauce, red onions, and cilantro, all topped with a blend of mozzarella and cheddar cheeses.',
        discount:'20% Off',
        price:'₹290',
        image:'assets/images/pizza.png',
        available:'Available again at 1pm tomorrow'
      },
      {
        name:'Mediterranean Veggie',
        badge: 'Bestseller',
        veg: true,
        desc: 'Freshly baked bread topped with tomato sauce, mozerella cheese, and basil. Serves two',
        discount:'20% Off',
        price:'₹290',
        image:'assets/images/pizza.png',
        available:'Available again at 1pm tomorrow'
      },
      {
        name:'Truffle Mushroom Gourmet',
        badge: 'Bestseller',
        veg: false,
        desc: 'Freshly baked bread topped with tomato sauce, mozerella cheese, and basil. Serves two',
        discount:'20% Off',
        price:'₹290',
        cutdownPrice: '₹270',
        image:'assets/images/pizza.png',
      },
      {
        name:'Hawaiian Sunse',
        badge: 'Bestseller',
        veg: true,
        desc: 'Freshly baked bread topped with tomato sauce, mozerella cheese, and basil. Serves two',
        discount:'20% Off',
        price:'₹290',
        cutdownPrice: '₹270',
        image:'assets/images/pizza.png',
      },
      {
        name:'Four Cheese Fusion',
        badge: 'Bestseller',
        veg: false,
        desc: 'Freshly baked bread topped with tomato sauce, mozerella cheese, and basil. Serves two',
        discount:'20% Off',
        price:'₹290',
        cutdownPrice: '₹270',
        image:'assets/images/pizza.png',
      }
    ];
    return topSeller;
  }
}
