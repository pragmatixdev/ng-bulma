import { Component } from '@angular/core';

@Component({
  selector: 'bm-modal-card-footer',
  template: `
    <footer class="modal-card-foot">
      <ng-content></ng-content>
    </footer>
  `
})
export class ModalCardFooterComponent {}
