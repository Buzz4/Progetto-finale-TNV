import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';
import { RatingService } from 'src/app/@core/services/rating.service';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};
  
  currentUser: Partial<User> = {};
  currentRate = 0;

  constructor(private ratingService: RatingService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onSubmit(form: NgForm){
    form.control.markAllAsTouched();
    if (form.valid) {
    form.value['rating'] = this.currentRate;
    this.ratingService.createRating({userId: this.currentUser.id, movieId: this.movie.id, rating: this.currentRate}).subscribe({
      next: (res) => {
        console.log(res);
    },
  });
  }
  }
}
