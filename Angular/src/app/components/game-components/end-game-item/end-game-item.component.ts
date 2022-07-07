import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-end-game-item',
  templateUrl: './end-game-item.component.html',
  styleUrls: ['./end-game-item.component.scss']
})
export class EndGameItemComponent implements OnInit {
  
  @Input() movie: Partial<Movie> = {};
  currentUser: Partial<User> = {};

  imageBaseUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"

  constructor(private movieService: MovieService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
  
  onSubmit(form: NgForm) {
      this.movieService.createFavorite({userId: this.currentUser.id, movieId: this.movie.id}).subscribe({
        next: (res) => {
        console.log(res);
      },
    });
  }
}
