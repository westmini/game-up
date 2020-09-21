import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() contentList: Array<string>;
  currentImages: Array<string> = [];
  incrementValue: number;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.setCarousel();
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log('Content List: ', this.contentList);
    this.setCarousel();
  }

  incrementImages(): void {
    const lastCurrentImageIndex = this.contentList.indexOf(this.currentImages[this.currentImages.length - 1]) + 1;
    if (lastCurrentImageIndex !== this.contentList.length) {
      this.currentImages = this.contentList.slice(lastCurrentImageIndex, lastCurrentImageIndex + this.incrementValue);
    }
  }

  decrementImages(): void {
    const firstCurrentImageIndex = this.contentList.indexOf(this.currentImages[0]);
    if (firstCurrentImageIndex !== 0) {
      this.currentImages = this.contentList.slice(firstCurrentImageIndex - this.incrementValue, firstCurrentImageIndex);
    }
  }

  private setCarousel(): void {
    if (window.innerWidth < 768) {
      this.currentImages = [this.contentList[0]];
      this.incrementValue = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.currentImages = this.contentList.slice(0, 2);
      this.incrementValue = 2;
    } else {
      this.currentImages = this.contentList.slice(0, 2);
      this.incrementValue = 2;
    }
  }
}
