import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Search} from '../../../models/interfaces/search';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchBar: FormGroup;
  @Output() submitSearch = new EventEmitter<Search>();
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.setForm();
    this.searchOnChanges();
  }

  private setForm(): void {
    this.searchBar = this.formBuilder.group({
      searchField: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }

  private searchOnChanges(): void {
    this.searchBar.controls.searchField.valueChanges.subscribe(value => {
    });
  }

  submitForm(event): void {
   const search: Search = this.searchBar.value;
   this.submitSearch.emit(search);
  }

}
