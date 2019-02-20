import { ViewContainerRef } from '@angular/core';

export class Data {
  [key: string]: any
}

export class ModalConfig {
  panelClass?: string;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: Data;
  viewContainerRef?: ViewContainerRef;
}
