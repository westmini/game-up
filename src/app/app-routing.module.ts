import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBarComponent} from './components/shared/search-bar/search-bar.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [{path: '', component: SearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
