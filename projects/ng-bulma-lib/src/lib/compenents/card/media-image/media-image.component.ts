import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-media-image',
  templateUrl: './media-image.component.html',
  styles: []
})
export class BmMediaImageComponent implements OnInit {
  @Input() aligned: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }
}
