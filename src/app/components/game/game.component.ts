import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Game} from '../../models/classes/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game = new Game();

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()) {
      const extras = this.router.getCurrentNavigation().extras.state.game;
      this.game = extras;
      console.log('Extras:', extras);
    } else {
      this.router.navigateByUrl('');
    }

  }

  ngOnInit(): void {
    if (this.router.getCurrentNavigation()) {

    }
  }


}
