import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/@core/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-end-game-item',
  templateUrl: './end-game-item.component.html',
  styleUrls: ['./end-game-item.component.scss']
})
export class EndGameItemComponent implements OnInit {
  
  @Input() movie: Partial<Movie> = {};

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {}
  
  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    if(form.valid){
      this.movieService.createFavorite(form.value).subscribe({
        next: (res) => {
        console.log(res);
      },
    });
  }
}
}
