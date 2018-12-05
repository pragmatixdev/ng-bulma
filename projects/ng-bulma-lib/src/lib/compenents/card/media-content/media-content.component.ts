import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-media-content',
  templateUrl: './media-content.component.html',
  styles: []
})
export class BmMediaContentComponent implements OnInit {
  @Input() customClass: string;
  constructor() { }

  ngOnInit() {
  }
}
