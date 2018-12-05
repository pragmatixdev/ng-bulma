import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-card-content',
  templateUrl: './card-content.component.html',
  styles: []
})
export class BmCardContentComponent implements OnInit {
  @Input() customClass: string;
  constructor() { }

  ngOnInit() {
  }
}
