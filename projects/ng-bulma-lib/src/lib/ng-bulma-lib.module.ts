import { NgModule } from '@angular/core';

import { BmCardModule } from './compenents/card/bm-card.module';
import { NgBulmaLibComponent } from './ng-bulma-lib.component';

@NgModule({
  imports: [ ],
  declarations: [ NgBulmaLibComponent ],
  exports: [ BmCardModule, NgBulmaLibComponent ]
})
export class NgBulmaLibModule { }
