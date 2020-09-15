import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterContentChecked {
  @Input() videoData: Array<any>;
  firstRow: Array<Game>;
  rightColumn: Array<Game>;
  displayVideo = true;

  constructor() { }

  ngOnInit(): void {
  }


  segmentArray() {
    this.firstRow = this.videoData.slice(0, 3);
    this.rightColumn = this.videoData.slice(4, 6);
  }

  ngAfterContentChecked(): void {
    this.segmentArray();
  }
}
