import { Component, ContentChild, Input, ViewContainerRef} from '@angular/core';
import { BmTabTitleComponent } from '../tab-title/tab-title.component';

@Component({
  selector: 'bm-tab',
  templateUrl: 'tab.component.html'
})
export class BmTabComponent {
  @Input() active = false;
  @Input() icon: string;
  @Input() iconOnRight: boolean;
  @Input() iconSize: string;
  @Input() title: string;
  @ContentChild(BmTabTitleComponent, {read: ViewContainerRef}) templateTitle: any;
}
