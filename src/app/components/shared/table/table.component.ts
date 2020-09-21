import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {Game} from '../../../models/classes/game';
import {GamesService} from '../../../services/games.service';
import {Search} from '../../../models/interfaces/search';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, DoCheck {
  @Input() tableData: Array<Game>;
  displayedColumns: string[] = ['gameName', 'description'];
  dataSource: MatTableDataSource < Game> = new MatTableDataSource<Game>() ;
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.dataSource.data = this.tableData;
  }

  log(val){
  }


}
