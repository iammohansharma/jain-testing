import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss'],
})
export class BannerSliderComponent  implements OnInit {

  @Input() banners = <any>[]
  constructor() { }

  ngOnInit() {}

}
