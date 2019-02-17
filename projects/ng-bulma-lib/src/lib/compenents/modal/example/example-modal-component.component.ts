import { Component, Inject } from '@angular/core';
import { MODAL_DATA } from '../modal.tokens';
import { ModalRef } from '../modal-ref';


@Component({
  selector: 'bm-example-modal-component',
  template: `
    <bm-modal-card>
      <bm-modal-card-header modal-card-header>My Title</bm-modal-card-header>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <bm-modal-card-footer modal-card-footer>
        <button class="button is-success">Save changes</button>
        <button class="button" (click)="close()">close</button>
      </bm-modal-card-footer>
    </bm-modal-card>
  `
})

export class ExampleModalComponent {
  constructor(public modalRef: ModalRef,
              @Inject(MODAL_DATA) public data: any) {
    console.log(data);
  }

  close() {
    this.modalRef.close();
  }

}
