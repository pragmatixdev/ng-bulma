import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infopack',
  templateUrl: './infopack.component.html',
  styleUrls: ['./infopack.component.scss']
})
export class InfopackComponent implements OnInit {
  @ViewChild('rightBtn') rightBtn !: ElementRef;
  submitBtnWidth: string;

  constructor() { }

  ngOnInit() {
    this.submitBtnWidth = ((this.rightBtn.nativeElement.offsetWidth + 11.5) / 16) +  'rem';
  }
}
