import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { FavoriteMovies, Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  dotnetBaseUrl : string = "https://localhost:7024/api/review"
  nodeBaseUrl: String = "http://localhost:1234/api";
  APIKey : string = "api_key=0f19618cdb7bc8cd3529c739a1455e1a"

  movies: Partial<Movie>[] = [];

  constructor(private httpClient: HttpClient) { }

  getRandomMovie(index: number) {
    // Per determinare questo valore facciamo eventualmente una query su movies/latest per avere l'id dell'ultimo Film inserito su TMDB
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);
    
      this.httpClient
      .get(
        `https://api.themoviedb.org/3/movie/${randomId}?${this.APIKey}&language=it-it`
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

getRandomCriterion(){
  const latestCriterion = 4;
  const randomCriterion = Math.round(Math.random() * latestCriterion);

  switch(randomCriterion){
    case 0:
      return "all'anno di uscita";
    case 1:
      return "alla media voto data dagli utenti";
    case 2:
      return "alla durata";
    case 3:
      return "al budget";
    case 4:
      return "agli incassi";
    default:
      return "a qualcosa, perdonami ma la funzione che mi genera ha funzionato male";
  }
}

getMovie(movieId: number | undefined) {
  return this.httpClient.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}?${this.APIKey}&language=it-it`);
}

getFavoriteByUserId(userId: number | undefined){
  return this.httpClient.get<FavoriteMovies[]>(`${this.nodeBaseUrl}/favorite/${userId}`);
}

createFavorite(movie: FavoriteMovies){
  return this.httpClient.post<FavoriteMovies>(`${this.nodeBaseUrl}/favorite`, movie); 
}

deleteFavorite(userId: number | undefined, movieId: number | undefined){
  return this.httpClient.delete<FavoriteMovies>(`${this.nodeBaseUrl}/favorite/${userId}/${movieId}`); 
}

}
