import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { BmModal } from './modal.service';
import { ModalContainerComponent } from './modal-container.component';
import { ModalCardComponent } from './bm-modal-card/modal-card.component';
import { ModalCardHeaderComponent } from './bm-modal-card/modal-card-header.component';
import { ModalCardFooterComponent } from './bm-modal-card/modal-card-footer.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [
    ModalContainerComponent,
    ModalCardComponent,
    ModalCardHeaderComponent,
    ModalCardFooterComponent
  ],
  exports: [
    ModalCardComponent,
    ModalCardHeaderComponent,
    ModalCardFooterComponent
  ],
  providers: [BmModal],
  entryComponents: [
    ModalContainerComponent,
  ]
})

export class BmModalModule {}
