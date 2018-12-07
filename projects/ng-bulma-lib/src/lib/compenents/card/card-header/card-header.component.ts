import {Component, Host, Input, OnChanges} from '@angular/core';

import { BmCardComponent } from '../bm-card.component';

@Component({
  selector: 'bm-card-header',
  templateUrl: './card-header.component.html'
})
export class BmCardHeaderComponent implements OnChanges{
  @Input() title: string;
  isCollapsible: boolean;

  constructor(@Host() public card: BmCardComponent) { }

  ngOnChanges() {
    this.isCollapsible = this.card.isCollapsible;
  }

  toggle(): void {
    this.card.isCollapsed = !this.card.isCollapsed;
  }
}
