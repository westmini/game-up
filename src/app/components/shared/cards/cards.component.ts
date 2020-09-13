import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() games: Array<Game>;
  constructor() { }

  ngOnInit(): void {
  }

}
