import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-lib',
  template: `
    <p>Bulma library has been loaded!</p>
  `,
  styles: []
})
export class NgBulmaLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
