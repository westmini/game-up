import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @Input() videoData: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    console.log('video data ', this.videoData)
  }
}
