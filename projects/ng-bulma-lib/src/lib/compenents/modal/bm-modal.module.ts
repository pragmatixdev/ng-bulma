import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ExampleModalComponent } from './example/example-modal-component.component';
import { ExampleParentComponent } from './example/example-parent-component.component';
import { BmModal } from './modal.service';
import { ModalContainerComponent } from './modal-container.component';
import { PortalModule } from '@angular/cdk/portal';
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
    ExampleModalComponent,
    ExampleParentComponent,
    ModalContainerComponent,
    ModalCardComponent,
    ModalCardHeaderComponent,
    ModalCardFooterComponent
  ],
  exports: [
    ExampleModalComponent,
    ExampleParentComponent,
    ModalCardComponent,
    ModalCardHeaderComponent,
    ModalCardFooterComponent
  ],
  providers: [BmModal],
  entryComponents: [
    ExampleModalComponent,
    ModalContainerComponent,
  ]
})

export class BmModalModule {
}
