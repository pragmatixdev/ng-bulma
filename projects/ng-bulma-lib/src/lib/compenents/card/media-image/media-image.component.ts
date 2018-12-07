import {Component, Input } from '@angular/core';

@Component({
  selector: 'bm-media-image',
  templateUrl: './media-image.component.html'
})
export class BmMediaImageComponent {
  @Input() aligned: string;
  @Input() size: string;
}
