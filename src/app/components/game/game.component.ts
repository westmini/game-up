import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Game, getGameScreenshots} from '../../models/classes/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game = new Game();
  contentList: Array<string>;
  constructor(private router: Router) {
      const extras = this.router.getCurrentNavigation().extras.state.game;
      this.game = extras;
      console.log('Extras:', extras);
  }

  ngOnInit(): void {
   this.contentList = getGameScreenshots([], this.game);
  }


}
