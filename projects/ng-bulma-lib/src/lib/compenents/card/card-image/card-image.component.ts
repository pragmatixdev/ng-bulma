import { Component, Input } from '@angular/core';

@Component({
  selector: 'bm-card-image',
  templateUrl: './card-image.component.html'
})
export class BmCardImageComponent {
  @Input() size: string;
}
