import { NgModule } from '@angular/core';

import { BmCardModule } from './compenents/card/bm-card.module';
import { BmTabModule } from './compenents/tab/bm-tab.module';

@NgModule({
  imports: [ ],
  declarations: [ ],
  exports: [ BmCardModule, BmTabModule ]
})
export class NgBulmaLibModule { }
