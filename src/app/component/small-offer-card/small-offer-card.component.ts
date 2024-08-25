import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-offer-card',
  templateUrl: './small-offer-card.component.html',
  styleUrls: ['./small-offer-card.component.scss'],
})
export class SmallOfferCardComponent  implements OnInit {

  @Input() items= <any>[];
  constructor() { }

  ngOnInit() {}

}
