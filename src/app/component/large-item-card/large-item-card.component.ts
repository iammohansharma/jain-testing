import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-item-card',
  templateUrl: './large-item-card.component.html',
  styleUrls: ['./large-item-card.component.scss'],
})
export class LargeItemCardComponent  implements OnInit {

  @Input() Items = <any>[]
  constructor() { }

  ngOnInit() {}

}
