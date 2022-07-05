import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RatingService } from 'src/app/@core/services/rating.service';

@Component({
  selector: 'tnv-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  currentRate = 0;

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
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
