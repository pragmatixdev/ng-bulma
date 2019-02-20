import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import { BmCarouselItemComponent } from '../carousel-item/bm-carousel-item.component';
import { CarouselConfig } from '../carousel-config';

@Component({
  selector: 'bm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class BmCarouselComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ViewChild('carouselWrapper') carouselWrapper: ElementRef;
  @ViewChild('carouselContent') carouselContent: ElementRef;
  @ContentChildren(BmCarouselItemComponent) items: QueryList<BmCarouselItemComponent>;
  @Input() config: CarouselConfig;
  carouselContentWidth: number = 0;
  slidingWidth: number = 0;
  isNextBtnDisabled: boolean = false;
  isPrevBtnDisabled: boolean = false;
  itemContainerWidth: any;
  autoPlayInterval: any;

  ngOnInit() {
    const defaultConfig = this.getDefaultConfigs();
    this.config = {...defaultConfig, ...this.config};
    this.itemContainerWidth = Math.ceil(this.carouselWrapper.nativeElement.offsetWidth / this.config.itemsToShow);
    this.isPrevBtnDisabled = !this.config.infinite;

    if (this.config.itemsToShow < this.config.itemsToScroll) {
      this.config.itemsToScroll = this.config.itemsToShow;
    }

    if (this.config.autoPlay === true) {
      this.startAutoPlay();
    }
  }

  ngAfterContentInit() {
    if (this.itemContainerWidth) {
      this.items.toArray().forEach(item => {
        item.itemContainerWidth = this.itemContainerWidth;
        item.itemPadding = this.config.itemPadding;
      });
    }
  }

  ngAfterViewInit() {
    this.setInnerContainerWidth();
  }

  get isLastSlide() {
    return Math.abs(this.slidingWidth) >= (this.carouselContentWidth - (this.itemContainerWidth * this.config.itemsToShow));
  }

  prevSlide() {
    if (this.config.infinite === false) {
      this.isNextBtnDisabled = false;
    }

    if (this.config.autoPlay === true) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }

    if (this.slidingWidth === 0 && this.config.infinite === true) {
      this.slidingWidth = -(this.carouselContentWidth - (this.itemContainerWidth * this.getItemsToScroll('previous')));
    } else {
      this.slidingWidth += (this.itemContainerWidth * this.getItemsToScroll('previous'));
      this.isPrevBtnDisabled = this.slidingWidth === 0 && this.config.infinite === false;
    }
  }

  nextSlide() {
    if (this.config.infinite === false) {
      this.isPrevBtnDisabled = false;
    }

    if (this.config.autoPlay === true) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }

    if (this.isLastSlide && this.config.infinite === true) {
      this.slidingWidth = 0;
    } else {
      this.slidingWidth -= (this.itemContainerWidth * this.getItemsToScroll('next'));
      this.isNextBtnDisabled = this.isLastSlide && this.config.infinite === false;
    }
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.config.autoPlaySpeed);
  }

  private setInnerContainerWidth() {
    this.carouselContent.nativeElement.childNodes[0].childNodes.forEach(resp => {
      this.carouselContentWidth += resp.childNodes[0].offsetWidth;
    });
  }

  getItemsToScroll(state) {
    let itemsToScroll: number;
    if (state === 'next') {
      const itemsScrolled = (Math.abs(this.slidingWidth) / this.itemContainerWidth) + this.config.itemsToShow;
      const itemsLeftToBeScrolled = this.items.length - itemsScrolled;
      itemsToScroll = itemsLeftToBeScrolled >= this.config.itemsToScroll ? this.config.itemsToScroll : itemsLeftToBeScrolled;
    } else if (state === 'previous') {
      const itemsScrolled = Math.abs((Math.abs(this.slidingWidth) / this.itemContainerWidth));
      if (itemsScrolled === 0) {
        itemsToScroll = this.config.itemsToShow;
      } else {
        itemsToScroll = itemsScrolled <= this.config.itemsToScroll ? itemsScrolled : this.config.itemsToScroll;
      }
    }
    return itemsToScroll;
  }

  private getDefaultConfigs(): CarouselConfig {
    return {
      hasNavigation: true,
      navigationSpeed: 1000,
      itemsToShow: 1,
      itemsToScroll: 1,
      infinite: true,
      autoPlay: true,
      autoPlaySpeed: 5000,
      itemPadding: 7
    };
  }
}

