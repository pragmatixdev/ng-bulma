import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-card-footer',
  templateUrl: './card-footer.component.html',
  styles: []
})
export class BmCardFooterComponent implements OnInit {
  @Input() customClass: string;
  constructor() { }

  ngOnInit() {
  }
}
