import { Component, OnInit } from '@angular/core';
import { FavoriteMovies, Movie } from 'src/app/models/movie';
import { Input } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/models/user';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'tnv-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  @Input() favoriteMovie: Partial<FavoriteMovies> [] = [];

  imageBaseUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

  currentUser: Partial<User> = {};

  constructor(private movieService: MovieService, private authService:AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  //favoriteMovieByUser = this.movieService.getFavoriteByUserId();

}
