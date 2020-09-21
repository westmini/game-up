import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { LoginComponent } from './components/forms/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { GameSearchComponent } from './components/search/game-search/game-search.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { TableComponent } from './components/shared/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './components/shared/cards/cards.component';
import { VideoPlayerComponent } from './components/shared/video-player/video-player.component';
import { SafePipe } from './models/classes/safe.pipe';
import {GridComponent} from './components/shared/image-grid/image-grid.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CarouselComponent} from './components/shared/carousel/carousel.component';
import { HeaderSearchComponent } from './components/shared/header-search/header-search.component';
import {MatOptionModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { GameComponent } from './components/game/game.component';
import {GameModule} from "./components/game/game.module";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    SearchComponent,
    GameSearchComponent,
    SearchBarComponent,
    TableComponent,
    CardsComponent,
    VideoPlayerComponent,
    CarouselComponent,
    SafePipe,
    GridComponent,
    FooterComponent,
    HeaderSearchComponent,
    GameComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        GameModule,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatOptionModule,
        MatAutocompleteModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
