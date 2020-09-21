import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [{path: '', component: HomeComponent},
  {
    path: 'game',
    loadChildren: () => import('./components/game/game.module').then(m => m.GameModule),
    data: { preload: false }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
