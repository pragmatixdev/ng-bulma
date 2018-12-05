import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-card-image',
  templateUrl: './card-image.component.html',
  styles: []
})
export class BmCardImageComponent implements OnInit {
  @Input() customClass: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

}
