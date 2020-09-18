import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {GamesService} from '../../../services/games.service';
import {Game, updateGameScreenshots} from '../../../models/classes/game';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() panelWidth: string | number
  url = '../../assets/videos/logo/gear-up-logo.mp4';
  gameSearchInput: FormGroup;
  games: Observable<any>;
  word = '';

  constructor(private formBuilder: FormBuilder, private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.setForm();
    this.panelWidth = 500;
  }

  getSearchedGames(event) {
    console.log('Event Code: ', event.key);
    if (event.key.length !== 1 && event.code !== 'Backspace') {
      return;
    } else if (event.code === 'Backspace') {

    } else {
      this.word = this.word + event.key;
    }
    this.getGames();
  }

  getGames() {
    this.word.charAt(0).toUpperCase();
    console.log('Word: ', this.word);
    this.gamesService.getSpecificGames(this.word).subscribe(gameResponse => {
      console.log('Games: ', gameResponse);
      const gamesResponse = Object.values(gameResponse);
      const mappedGames = gamesResponse.map(game => {
        return {
          id: game.id,
          gameName: game.name,
          description: game.summary,
          url: game.url,
          screenshots: game.screenshots,
          videos: game.videos,
          cover: game.cover.url
        };
      });
      updateGameScreenshots(mappedGames);
      this.games = of(mappedGames);
    });
  }

  private setForm(): void {
    this.gameSearchInput = this.formBuilder.group({
      searchField: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }

  listenForKeyEvents() {
    this.gameSearchInput.controls.searchField.valueChanges.subscribe(letter => {

      if (letter === '') {
        return;
      } else {
        this.word = letter;
        this.getGames();
      }

    });
  }

  ngAfterViewInit(): void {
    this.listenForKeyEvents();
  }

}
