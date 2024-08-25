import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-item-card',
  templateUrl: './small-item-card.component.html',
  styleUrls: ['./small-item-card.component.scss'],
})
export class SmallItemCardComponent  implements OnInit {

  @Input() Items = <any>[]
  constructor() { }

  ngOnInit() {}

}
