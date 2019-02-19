import { Component } from '@angular/core';
import { BmModal } from '../modal.service';
import { ExampleModalComponent } from './example-modal-component.component';

@Component({
  selector: 'bm-example-parent-component',
  template: `
    <button class="button is-warning" (click)="open()">open modal</button>
  `
})

export class ExampleParentComponent {
  constructor(private bmModal: BmModal) {}

  open() {
    const dialogRef = this.bmModal.open(ExampleModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
