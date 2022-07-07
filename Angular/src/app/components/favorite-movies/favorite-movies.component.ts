import { Component, OnInit } from '@angular/core';
import { FavoriteMovies, Movie } from 'src/app/models/movie';
import { Input } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};
  
  movieUserIdList: Partial<FavoriteMovies> [] = [];
  movieList: Partial<Movie>[] = [];
  currentUser: Partial<User> = {};

  constructor(private movieService: MovieService, private authService:AuthService) { }

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