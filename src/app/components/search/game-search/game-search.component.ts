import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Search} from '../../../models/interfaces/search';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {
  @Output() callSearchApi = new EventEmitter<Search>();
  search: Search;
  constructor() {
  }

  ngOnInit(): void {
  }

  postGameSearch(event): void {
    this.callSearchApi.emit(event);
  }

}
