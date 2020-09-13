import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../services/games.service';
import {Game} from '../../models/classes/game';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  game: Game;
  games: Array<Game> = [];
  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {




  }

  callSearch(search) {

    this.gamesService.getGames(search.searchField).subscribe(gamesResponse => {
      this.games = [];
      Object.values(gamesResponse).forEach(test => {
        this.game = new Game();
        this.game = {id: test.id, gameName: test.name, description: test.summary, genre: test.genre, url: test.url}
        this.games.push(this.game);
      });
      console.log('Games returned from Endpoint: ', this.games);
    });
  }
}
