import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-card-header',
  templateUrl: './card-header.component.html',
  styles: []
})
export class BmCardHeaderComponent implements OnInit {
  @Input() customClass: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }
}
