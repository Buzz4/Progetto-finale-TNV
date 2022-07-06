import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { FavoriteMovies, Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  dotnetBaseUrl : string = "https://localhost:7024/api/review"
  nodeBaseUrl: String = "http://localhost:1234/api";

  movies: Partial<Movie>[] = [];

  constructor(private httpClient: HttpClient) { }

  getRandomMovie(index: number) {
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);
    
      this.httpClient
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

createFavorite(movie: FavoriteMovies){
  return this.httpClient.post<FavoriteMovies>(`${this.nodeBaseUrl}/favorite`, movie); 
}

getFavoriteByUserId(userId: number){
  return this.httpClient.get<FavoriteMovies>(`${this.nodeBaseUrl}/favorite/:${userId}`);
}

}
