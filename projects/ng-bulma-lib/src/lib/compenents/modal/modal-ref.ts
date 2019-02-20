import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class ModalRef<R = any> {
  private readonly _afterClosed = new Subject<R | undefined>();
  private result: R | undefined;

  constructor(private overlayRef: OverlayRef) {
    overlayRef.detachments().subscribe(() => {
      this._afterClosed.next(this.result);
      this._afterClosed.complete();
      this.overlayRef.dispose();
    });
  }

  close(dialogResult?: any): void  {
    if (dialogResult === 'cross-click') {
      this.overlayRef.dispose();
    } else {
      this.result = dialogResult;
      this.overlayRef.detach();
    }
  }

  afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }
}
