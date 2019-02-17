import { Component } from '@angular/core';

@Component({
  selector: 'bm-modal-card-header',
  template: `
    <header class="modal-card-head">
      <p class="modal-card-title">
        <ng-content></ng-content>
      </p>
      <button class="delete" aria-label="close"></button>
    </header>
  `
})
export class ModalCardHeaderComponent {}
