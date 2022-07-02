import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RatingService } from 'src/app/@core/services/rating.service';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'tnv-end-game-item',
  templateUrl: './end-game-item.component.html',
  styleUrls: ['./end-game-item.component.scss']
})
export class EndGameItemComponent implements OnInit {
  
  currentRate = 0;

  @Input() movie: Partial<Movie> = {};

  constructor(private ratingService: RatingService) { }

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
