import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild
} from '@angular/core';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'bm-modal-container',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <ng-template cdkPortalOutlet></ng-template>
  `
})

export class ModalContainerComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;

  constructor() {
    super();
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this._portalOutlet.attachTemplatePortal(portal);
  }
}
