import { Component } from '@angular/core';
import { ModalRef } from '../modal-ref';

@Component({
  selector: 'bm-modal-card-header',
  template: `
    <header class="modal-card-head">
      <p class="modal-card-title">
        <ng-content></ng-content>
      </p>
      <button class="delete" aria-label="close" (click)="close('cross-click')"></button>
    </header>
  `
})
export class ModalCardHeaderComponent {
  constructor( private modalRef: ModalRef ) {}

  close(state: any) {
    this.modalRef.close(state);
  }
}
