import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class GridComponent implements OnInit, AfterContentChecked {
  @Input() gridData: Array<Game>;
  @Input() displayVideo: boolean
  firstRow: Array<Game>;
  rightColumn: Array<Game>;

  constructor() {
  }

  ngOnInit(): void {
  }

  segmentArray() {
    this.firstRow = this.gridData.slice(0, 3);
    this.rightColumn = this.gridData.slice(4, 6);
  }

  ngAfterContentChecked(): void {
    this.segmentArray();
  }
}
