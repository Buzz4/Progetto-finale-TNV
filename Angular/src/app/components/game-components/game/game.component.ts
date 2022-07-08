import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Criterion, Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  constructor(private movieService: MovieService) { }
  
  @Input() movie: Movie = {} as Movie;
  movies = this.movieService.movies;
  criterion : Criterion = {label: "", key: ''};
  convertedCriterion: number = 0;
  orderedMovies: Movie [] = [];

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.movieService.getRandomMovie(index);
    }
    this.criterion = this.movieService.getRandomCriterion();
    console.log(this.criterion);
  
    /*if (this.criterion.key == 'release_date'){
      this.convertedCriterion = parseInt(this.movie.release_date.substring(0,4));
      console.log(this.convertedCriterion);
    } else {
      this.convertedCriterion = this.movie.criterion;
      console.log(this.convertedCriterion);
    }*/

    switch(this.criterion.key){
      case 'release_date':
        this.convertedCriterion = parseInt(this.movie.release_date.substring(0, 4));
        console.log(this.convertedCriterion);
        break;
      case 'vote_average':
        this.convertedCriterion = this.movie.vote_average;
        console.log(this.convertedCriterion);
        break;
      case 'runtime':
        this.convertedCriterion = this.movie.runtime;
        console.log(this.convertedCriterion);
        break;
      case 'budget':
        this.convertedCriterion = this.movie.budget;
        console.log(this.convertedCriterion);
        break;
      case 'revenue':
      this.convertedCriterion = this.movie.revenue;
      console.log(this.convertedCriterion);
      break;
    }
  }

  /*major (movie1: Movie, movie2: Movie){
    if (this.movie1.convertedCriterion > movie2.convertedCriterion){
      return -1;
    } else if (movie1.convertedCriterion < movie2.convertedCriterion){
      return 1;
    }
    return 0;
  }

  orderMovies(convertedCriterion: number){

    for(let i = 0; i < 10; i++){
      
    }
  }*/
}
