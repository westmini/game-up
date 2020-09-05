import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../services/games.service';
import {Game} from '../../models/classes/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: Array<Game> = new Array<Game>();

  constructor(private gameService: GamesService) {
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.gameAllGames().subscribe(game => {
      console.log('Game response from server: ', game);
      const gamesResponse = Object.values(game);
      this.games = gamesResponse.map(gameResponse => {
        return {
          id: gameResponse.id,
          gameName: gameResponse.name,
          description: gameResponse.summary,
          url: gameResponse.url,
          screenshots: gameResponse.screenshots
        };
      });
      this.updateGameScreenshots();
    });
  }

  updateGameScreenshots(): void {
    this.games.forEach(game => {
      game.screenshots = game.screenshots.map(screenshot => {
        return screenshot.url.replace('thumb', '1080p');
      });
    });
  }
}

