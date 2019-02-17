import { Component } from '@angular/core';
import { BmModal } from '../modal.service';
import { ExampleModalComponent } from './example-modal-component.component';

@Component({
  selector: 'bm-example-parent-component',
  template: `
    <button class="button" (click)="open()">open modal</button>
  `
})

export class ExampleParentComponent {
  constructor(private bmModal: BmModal) {
  }

  open() {
    this.bmModal.open(ExampleModalComponent);
  }
}
