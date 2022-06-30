import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieGame } from 'src/app/models/movie';

@Component({
  selector: 'tnv-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  movies: Partial<Movie>[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    for(let index = 0; index < 10; index++){
      this.getRandomMovie(index);
    }
  }

  getRandomMovie(index: number) {
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);
    
      this.http
      .get(
        `https://api.themoviedb.org/3/movie/${randomId}?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it`
      )
      .subscribe({
        // Qui non usate any ovviamente, ma create l'interfaccia typescript per la response
        next: (res: Partial<Movie>) => {
          console.log('ID trovato', randomId);
          if (res.poster_path) {
            this.movies[index] = res;
          } else {
            console.log('Film senza poster');
            this.getRandomMovie(index);
          }
        },
        error: () => {
          console.log('ID non esistente, retry!', randomId);
          this.getRandomMovie(index);
        },
      });
  }
}
