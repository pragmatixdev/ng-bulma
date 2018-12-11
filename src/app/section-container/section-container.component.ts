import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() greyBackground: boolean;
  constructor() { }

  ngOnInit() {
  }

}
