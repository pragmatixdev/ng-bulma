import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  @Input() isFloatingHeader: boolean;
  isFixed: boolean;

  ngOnInit() {
    this.isFixed = !this.isFloatingHeader;
  }
  ngAfterViewInit() {
    if (this.isFloatingHeader) {
      const scroll$ = fromEvent(window, 'scroll');
      scroll$.subscribe(() => window.pageYOffset > 0 ? this.isFixed = true : this.isFixed = false);
    }
  }
}
