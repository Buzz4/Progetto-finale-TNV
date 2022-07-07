import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/@core/services/auth.service';
import { ReviewService } from 'src/app/@core/services/review.service';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/user';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService, private authService: AuthService) { }

  @Input() movie: Partial<Movie> = {};
  currentUser: Partial<User> = {};
  currentRecensione = "";

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }
  
  onSubmit(form: NgForm) {
    form.control.markAllAsTouched()
    if(form.valid){
      this.reviewService.addReview({userId: this.currentUser.id, movieId: this.movie.id, recensione: JSON.stringify(form.value)}).subscribe({
      next: (res) => {
        console.log(res)
      },
    });
  }
}

toStringa(form: NgForm) : string{
  return String = form.value;
}
}