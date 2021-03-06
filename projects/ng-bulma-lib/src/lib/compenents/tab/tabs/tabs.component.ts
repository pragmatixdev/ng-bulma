import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';

import { BmTabComponent } from '../tab/tab.component';

@Component({
  selector: 'bm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs-component.scss']
})

export class BmTabsComponent implements AfterContentInit {
  @Input() modifierClass: string;
  titles = [];

  @ContentChildren(BmTabComponent) tabs: QueryList<BmTabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all tab titles
    this.tabs.map(tab => {
      if (tab.templateTitle) {
        this.titles.push(tab.templateTitle.element.nativeElement.innerHTML);
      }
    });
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: BmTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
