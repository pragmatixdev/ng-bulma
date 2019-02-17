import { ViewContainerRef } from '@angular/core';

export class Data {}

export class ModalConfig {
  panelClass?: string;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: Data;
  viewContainerRef?: ViewContainerRef;
}
