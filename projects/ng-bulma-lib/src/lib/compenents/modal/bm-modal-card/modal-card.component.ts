import { Component } from '@angular/core';

@Component({
  selector: 'bm-modal-card',
  template: `
    <div class="modal-card">
      <ng-content select="[modal-card-header]"></ng-content>
      <section class="modal-card-body">
        <ng-content></ng-content>
      </section>
      <ng-content select="[modal-card-footer]"></ng-content>
    </div>
  `
})
export class ModalCardComponent {}
