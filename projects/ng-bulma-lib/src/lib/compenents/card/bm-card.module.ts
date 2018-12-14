import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BmCardComponent } from './bm-card.component';
import { BmCardToggleService } from './bm-card-accordion.service';
import { BmCardFooterComponent } from './card-footer/card-footer.component';
import { BmCardHeaderComponent } from './card-header/card-header.component';
import { BmCardImageComponent } from './card-image/card-image.component';
import { BmMediaContentComponent } from './media-content/media-content.component';
import { BmMediaImageComponent } from './media-image/media-image.component';
import { BmCardContentComponent } from './card-content/card-content.component';

@NgModule({
  providers: [ BmCardToggleService ],
  imports: [ BrowserAnimationsModule ],
  declarations: [
    BmCardComponent,
    BmCardContentComponent,
    BmCardFooterComponent,
    BmCardHeaderComponent,
    BmCardImageComponent,
    BmMediaContentComponent,
    BmMediaImageComponent
  ],
  exports: [
    BmCardComponent,
    BmCardContentComponent,
    BmCardFooterComponent,
    BmCardHeaderComponent,
    BmCardImageComponent,
    BmMediaContentComponent,
    BmMediaImageComponent
  ]
})
export class BmCardModule { }
