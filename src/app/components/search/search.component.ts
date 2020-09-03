import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
  }

  callSearch(search) {
    console.log('Search: ', search);
    this.gamesService.getGames(search.searchField).subscribe(games => {
    console.log('Games: ', games);
  });
  }
}
