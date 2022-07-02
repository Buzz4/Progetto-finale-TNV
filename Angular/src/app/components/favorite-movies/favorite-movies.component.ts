import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Input } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';

@Component({
  selector: 'tnv-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};
   imageBaseUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

  constructor(private movieService: MovieService) { }

  movies = this.movieService.movies;

  ngOnInit(): void {
  }

}
