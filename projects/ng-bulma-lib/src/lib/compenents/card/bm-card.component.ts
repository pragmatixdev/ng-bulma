import {Component, Input, OnChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'bm-card',
  templateUrl: './bm-card.component.html',
  styleUrls: ['./bm-card.component.scss'],
  animations: [
    trigger('collapseCard', [
      state('closed', style({
        height: '0',
        opacity: '1'
      })),
      state('open', style({
        height: '*',
        opacity: '1'
      })),
      transition('closed => open', animate('400ms ease-in')),
      transition('open => closed', animate('400ms ease-out'))
    ])
  ]
})
export class BmCardComponent implements OnChanges{
  @Input() isAccordionOpen: boolean;
  @Input() isCollapsible: boolean;
  isCollapsed: boolean;

  ngOnChanges() {
    this.isCollapsed = !this.isAccordionOpen;
  }
}
