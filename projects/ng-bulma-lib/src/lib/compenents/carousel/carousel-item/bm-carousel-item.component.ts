import { Component, Input } from '@angular/core';

@Component({
  selector: 'bm-carousel-item',
  template: `
    <div select="[bm-carousel-item]"
         [style.width.px]="itemContainerWidth"
         [style.padding-right.px]="itemPadding"
         [style.padding-left.px]="itemPadding">
      <ng-content></ng-content>
    </div>
  `
})

export class BmCarouselItemComponent {
  @Input() itemContainerWidth: number;
  @Input() itemPadding: number;
}

