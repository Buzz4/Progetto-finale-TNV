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

  constructor(private reviewService: ReviewService) { }

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
    }
  }
}
