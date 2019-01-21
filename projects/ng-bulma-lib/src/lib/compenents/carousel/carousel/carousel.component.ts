import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild } from '@angular/core';
import { BmCarouselItemComponent } from '../carousel-item/bm-carousel-item.component';

@Component({
  selector: 'bm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class BmCarouselComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('carouselWrapper') carouselWrapper: ElementRef;
  @ViewChild('carouselContent') carouselContent: ElementRef;
  @ContentChildren(BmCarouselItemComponent) items: QueryList<BmCarouselItemComponent>;
  carouselContentWidth: number = 0;
  slidingWidth: number = 0;
  isNextBtnDisabled: boolean = false;
  isPrevBtnDisabled: boolean = false;
  itemContainerWidth: any;
  autoPlayInterval: any;

  hasNavigation: boolean = true;
  navSpeed: number = 1000;
  numberOfItems: any = 1;
  loop: boolean = true;
  autoPlay: boolean = false;
  speed: number = 5000;

  constructor() {}

  ngAfterContentInit() {
    if (this.itemContainerWidth) {
      this.items.toArray().forEach(item => item.itemContainerWidth = this.itemContainerWidth);
    }
  }

  ngAfterViewInit() {
    this.checkInnerContainerWidth();
  }

  ngOnInit() {
    this.itemContainerWidth = Math.ceil(this.carouselWrapper.nativeElement.offsetWidth / this.numberOfItems);
    if (this.slidingWidth === 0 && this.loop === false) {
      this.isPrevBtnDisabled = true;
    }
    if (this.autoPlay === true) {
      this.autoPlayFunction();
    }
  }

  prevSlide() {
    if (this.loop === false) {
      this.isNextBtnDisabled = false;
    }
    if (this.autoPlay === true) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayFunction();
    }
    if (this.slidingWidth === 0 && this.loop === true) {
      this.slidingWidth = -(this.carouselContentWidth - this.itemContainerWidth);
    } else if (this.slidingWidth === 0 && this.loop === false) {
      this.isPrevBtnDisabled = true;
    } else {
      this.slidingWidth += this.itemContainerWidth;

      this.isPrevBtnDisabled = false;
    }
  }

  nextSlide() {
    if (this.loop === false) {
      this.isPrevBtnDisabled = false;
    }
    if (this.autoPlay === true) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayFunction();
    }
    const isLastSlide = Math.abs(this.slidingWidth) === (this.carouselContentWidth - this.itemContainerWidth * this.numberOfItems);
    if (isLastSlide && this.loop === true) {
      this.slidingWidth = 0;
    } else if (isLastSlide && this.loop === false) {
      this.isNextBtnDisabled = true;
    }  else {
      this.slidingWidth -= (this.itemContainerWidth);
      this.isNextBtnDisabled = false;
    }
  }

  autoPlayFunction() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.speed);
  }

  checkInnerContainerWidth() {
    this.carouselContent.nativeElement.childNodes[0].childNodes.forEach( resp => {
      this.carouselContentWidth += resp.childNodes[0].offsetWidth;
    });
  }
}

