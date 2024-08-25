import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { ItemSliderComponent } from './item-slider/item-slider.component';
import { IonicModule } from '@ionic/angular';
import { SmallOfferCardComponent } from './small-offer-card/small-offer-card.component';
import { SmallItemCardComponent } from './small-item-card/small-item-card.component';
import { LargeItemCardComponent } from './large-item-card/large-item-card.component';
import { HeaderComponent } from './header/header.component';
import { RouterLinkWithHref } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { ProductItemsComponent } from './product-items/product-items.component';
@NgModule({
  declarations: [BannerSliderComponent, ItemSliderComponent,SmallOfferCardComponent,
     SmallItemCardComponent, LargeItemCardComponent, HeaderComponent, CouponsComponent,ProductItemsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLinkWithHref
  ],
  exports: [
    BannerSliderComponent,
    ItemSliderComponent,
    SmallOfferCardComponent,
    SmallItemCardComponent,
    LargeItemCardComponent,
    HeaderComponent,
    CouponsComponent,ProductItemsComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
