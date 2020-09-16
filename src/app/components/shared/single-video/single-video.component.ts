import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/classes/game';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss']
})
export class SingleVideoComponent implements OnInit {
  @Input() videoData: Array<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

ngAfterContentChecked(): void {
 
}
}
