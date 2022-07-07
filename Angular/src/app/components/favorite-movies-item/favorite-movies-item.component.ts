import { Component, OnInit } from '@angular/core';
import { FavoriteMovies, Movie } from 'src/app/models/movie';
import { Input } from '@angular/core';

@Component({
  selector: 'tnv-favorite-movies-item',
  templateUrl: './favorite-movies-item.component.html',
  styleUrls: ['./favorite-movies-item.component.scss']
})
export class FavoriteMoviesItemComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};
  @Input() movieUserIdList: Partial<FavoriteMovies> [] = [];
  @Input() movieList: Partial<Movie>[] = [];

  imageBaseUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

  constructor() { }

  ngOnInit(): void {
  }

}
