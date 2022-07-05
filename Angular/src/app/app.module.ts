import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { GameComponent } from './components/game-components/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { GameItemComponent } from './components/game-components/game-item/game-item.component';
import { ReviewComponent } from './components/review/review.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { FavoriteMoviesItemComponent } from './components/favorite-movies-item/favorite-movies-item.component';
import { EndGameItemComponent } from './components/game-components/end-game-item/end-game-item.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { EndGameComponent } from './components/game-components/end-game/end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    RankingsComponent,
    GameComponent,
    GameItemComponent,
    ReviewComponent,
    WelcomeHeaderComponent,
    FavoriteMoviesComponent,
    FavoriteMoviesItemComponent,
    EndGameItemComponent,
    RatingsComponent,
    EndGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
