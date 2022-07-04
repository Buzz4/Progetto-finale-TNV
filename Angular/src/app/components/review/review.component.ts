import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { RatingService } from 'src/app/@core/services/rating.service';
import { ReviewService } from 'src/app/@core/services/review.service';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

  currentRate = 0;

  constructor(private reviewService: ReviewService, private ratingService: RatingService, private router: Router) { }

  ngOnInit(): void {
  }

    onSubmit(form: NgForm) {
      form.control.markAllAsTouched();
      if(form.valid){
        this.reviewService.addReview(form.value).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
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
}
