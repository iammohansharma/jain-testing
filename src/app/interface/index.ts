export interface Cuisine {
    image: string;
    name: string;
  }
  
  
  export interface TrendingOffer {
    image: string;
    discount: string;
  }
  
  export interface Brand {
    image: string;
    duration: string;
    name: string;
  }
  
  export interface PastOrder {
    image: string;
    duration: string;
    rating: number;
    more: string;
    name: string;
  }
  
  export interface Restaurant {
    name: string;
    image: string;
    rating: number;
    location: string;
    comboDiscount: string;
    speciality: string;
    offer: string;
    review: string;
    distance: string;
    discount: number;
    openingTime: string;
  }
  
  export interface Coupon {
    name: string;
    offers: string;
    details: string;
  }
  
  export interface TopSeller {
    name: string;
    badge: string;
    veg: boolean;
    desc: string;
    discount: string;
    price: string;
    cutdownPrice?: string;
    image: string;
    available?: string;
  }
  