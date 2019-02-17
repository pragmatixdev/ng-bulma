import { OverlayRef } from '@angular/cdk/overlay';

export class ModalRef {
  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
