import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmCarouselComponent } from './carousel/carousel.component';
import { BmCarouselItemComponent } from './carousel-item/bm-carousel-item.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BmCarouselComponent,
    BmCarouselItemComponent
  ],
  exports: [
    BmCarouselComponent,
    BmCarouselItemComponent
  ]
})

export class BmCarouselModule { }
