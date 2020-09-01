import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  this.gameService.getGames().subscribe(data => {
    console.log('Data: ', data);
  });
  }

}
