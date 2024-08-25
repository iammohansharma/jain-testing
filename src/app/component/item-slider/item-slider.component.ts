import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.scss'],
})
export class ItemSliderComponent  implements OnInit {

  @Input() items = <any>[];
  constructor() { }

  ngOnInit() {}

}
