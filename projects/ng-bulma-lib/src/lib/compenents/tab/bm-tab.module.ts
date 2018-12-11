import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmTabComponent } from './tab/tab.component';
import { BmTabsComponent } from './tabs/tabs.component';
import { BmTabTitleComponent } from './tab-title/tab-title.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BmTabComponent,
    BmTabsComponent,
    BmTabTitleComponent
  ],
  exports: [
    BmTabComponent,
    BmTabsComponent,
    BmTabTitleComponent
  ]
})
export class BmTabModule { }
