import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';
import {GamesService} from "../../../services/games.service";
import {Search} from "../../../models/interfaces/search";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, DoCheck {
  @Input() tableData: Array<Game>;
  displayedColumns: string[] = ['gameName', 'description'];
  dataSource: Array<any> = []
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
this.callSearch({searchValue: 'Halo'});
  }

  ngDoCheck(): void {
    this.dataSource = this.tableData;
    console.log('Table Data: ', this.tableData);
  }

  log(val){
    console.log('Val: ', val);
  }


}
