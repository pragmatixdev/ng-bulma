import { AfterViewInit, Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './brand.scss']
})
export class HeaderComponent implements AfterViewInit {
  isFixed: boolean;

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll');
    scroll$.subscribe(() => window.pageYOffset > 0 ? this.isFixed = true : this.isFixed = false);
  }
}
