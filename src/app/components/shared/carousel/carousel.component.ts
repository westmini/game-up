import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() games: Array<Game>;
  currentImages: Array<Game> = [];
  incrementValue: number;

  constructor() {
  }

  ngOnInit(): void {
    this.setCarousel();
  }

  incrementImages(): void {
    const lastCurrentImageIndex = this.games.indexOf(this.currentImages[this.currentImages.length - 1]) + 1;
    if (lastCurrentImageIndex !== this.games.length) {
      this.currentImages = this.games.slice(lastCurrentImageIndex, lastCurrentImageIndex + this.incrementValue);
    }
  }

  decrementImages(): void {
    const firstCurrentImageIndex = this.games.indexOf(this.currentImages[0]);
    if (firstCurrentImageIndex !== 0) {
      this.currentImages = this.games.slice(firstCurrentImageIndex - this.incrementValue, firstCurrentImageIndex);
    }
  }

  private setCarousel(): void {
    if (window.innerWidth < 768) {
      this.currentImages = [this.games[0]];
      this.incrementValue = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.currentImages = this.games.slice(0, 2);
      this.incrementValue = 2;
    } else {
      this.currentImages = this.games.slice(2, 4);
      this.incrementValue = 2;
    }
  }
}
