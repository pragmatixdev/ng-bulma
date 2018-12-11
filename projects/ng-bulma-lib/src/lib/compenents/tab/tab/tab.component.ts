import { Component, Input } from '@angular/core';

@Component({
  selector: 'bm-tab',
  templateUrl: 'tab.component.html'
})
export class BmTabComponent {
  @Input() active = false;
  @Input() title: string;
}
