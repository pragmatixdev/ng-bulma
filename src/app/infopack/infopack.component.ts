import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infopack',
  templateUrl: './infopack.component.html',
  styleUrls: ['./infopack.component.scss']
})
export class InfopackComponent implements OnInit {
  @ViewChild('rightBtn') rightBtn !: ElementRef;
  rightBtnWidth: string;

  constructor() { }

  ngOnInit() {
    this.rightBtnWidth = ((this.rightBtn.nativeElement.offsetWidth + 11.5) / 16) +  'rem';
  }

}
