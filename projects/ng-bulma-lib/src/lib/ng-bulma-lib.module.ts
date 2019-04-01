import { NgModule } from '@angular/core';

import { BmCardModule } from './compenents/card/bm-card.module';
import { BmTabModule } from './compenents/tab/bm-tab.module';
import { BmInputModule } from './compenents/input/bm-input.module';

@NgModule({
  imports: [ ],
  declarations: [ ],
  exports: [ BmCardModule, BmTabModule, BmInputModule ]
})
export class NgBulmaLibModule { }
