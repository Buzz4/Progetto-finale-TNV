import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/@core/services/movie.service';
import { RatingService } from 'src/app/@core/services/rating.service';

@Component({
  selector: 'tnv-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  currentRate = 0;
  
  constructor(private movieService: MovieService, private ratingService: RatingService) { }

  movies = this.movieService.movies;


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.valid) {
      form.value['rating'] = this.currentRate;
      this.ratingService.createRating(form.value).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }

}
