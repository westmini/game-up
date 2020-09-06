import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit, AfterViewInit {
  @Input() gridData: Array<any>;

  constructor() {
  }

  ngOnInit(): void {
    this.populateImageGrid();
  }

  populateImageGrid(): void {
    this.gridData = this.gridData.slice(0, 5);
  }

  ngAfterViewInit(): void {
    console.log('grid ', this.gridData)
  }
}
