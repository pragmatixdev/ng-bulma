import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  pathLocation = [];
  constructor(private location: Location) {
    this.pathLocation = this.location.path().split('/');
    this.pathLocation.shift();
  }
}
