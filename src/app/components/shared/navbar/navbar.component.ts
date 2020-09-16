import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url = '../../assets/videos/logo/gear-up-logo.mp4';
  gameSearchInput: FormGroup;
  filteredStates: Observable<any[]>;

  states: any[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
    this.filteredStates = this.gameSearchInput.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );

  }

  private setForm(): void {
    this.gameSearchInput = this.formBuilder.group({
      searchField: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }
  private _filterStates(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
