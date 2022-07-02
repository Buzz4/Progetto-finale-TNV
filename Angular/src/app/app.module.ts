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
import { GameComponent } from './components/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { GameItemComponent } from './components/game-item/game-item.component';
import { ReviewComponent } from './components/review/review.component';
<<<<<<< HEAD
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
=======
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { FavoriteMoviesItemComponent } from './components/favorite-movies-item/favorite-movies-item.component';
import { OrderComponent } from './components/order/order.component';
import { EndGameItemComponent } from './components/end-game-item/end-game-item.component';
>>>>>>> ea2afdf0448c059c2f74f8de55dac161e2beecdc

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
<<<<<<< HEAD
    WelcomeHeaderComponent,
=======
    FavoriteMoviesComponent,
    FavoriteMoviesItemComponent,
    OrderComponent,
    EndGameItemComponent,
>>>>>>> ea2afdf0448c059c2f74f8de55dac161e2beecdc
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
