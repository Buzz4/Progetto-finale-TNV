import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/@core/services/review.service';

@Component({
  selector: 'tnv-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
  }

  review(form: NgForm) {

      this.reviewService.addReview(form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/');
        },
      });
    }
}
