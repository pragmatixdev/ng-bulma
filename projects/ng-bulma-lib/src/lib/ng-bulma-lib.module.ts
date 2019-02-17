import { NgModule } from '@angular/core';

import { BmCardModule } from './compenents/card/bm-card.module';
import { BmTabModule } from './compenents/tab/bm-tab.module';
import { BmCarouselModule } from './compenents/carousel/bm-carousel.module';
import { BmModalModule } from './compenents/modal/bm-modal.module';

@NgModule({
  imports: [ ],
  declarations: [ ],
  exports: [ BmCardModule, BmTabModule, BmCarouselModule, BmModalModule ]
})
export class NgBulmaLibModule { }
