import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  hold = [];

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
  }

  callSearch(search) {
    console.log('Search: ', search);
    this.hold = [];
    this.gamesService.getGames(search.searchField).subscribe(games => {
      Object.values(games).forEach(game => {
        this.hold.push(game);
      });
      console.log('Hold: ', this.hold);
    });
  }
}
