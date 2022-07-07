import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { FavoriteMovies, Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';
import { FavoriteMoviesComponent } from '../favorite-movies/favorite-movies.component';

@Component({
  selector: 'tnv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Partial<User> = {};
  movieUserIdList: Partial<FavoriteMovies>[] = [];
  movieList: Partial<Movie>[] = [];

  constructor(private authService: AuthService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.getAllFavorite();
  }
  
  getAllFavorite(){
    const userId = this.currentUser.id;
    this.movieService.getFavoriteByUserId(userId).subscribe({
      next: (res: FavoriteMovies[]) => {
        this.movieUserIdList = res;
        console.log(this.movieUserIdList);

        for(let i = 0; i < this.movieUserIdList.length; i++) {
          let movieId = this.movieUserIdList[i].movieId
          this.movieService.getMovie(movieId).subscribe({
            next: (res) => {
              this.movieList[i] = res;
              console.log(res);
            }})
          }   
        }
      });
    }
}
