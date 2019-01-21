import { Component, Input } from '@angular/core';

@Component({
  selector: 'bm-carousel-item',
  template: `
    <div select="[bm-carousel-item]" [style.width.px]="itemContainerWidth" style="padding-right: 15px">
      <ng-content></ng-content>
    </div>
  `
})

export class BmCarouselItemComponent {
  @Input() itemContainerWidth: number;
}

