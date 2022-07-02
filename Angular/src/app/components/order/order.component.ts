import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/@core/services/movie.service';

@Component({
  selector: 'tnv-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  constructor(private movieService: MovieService) { }

  movies = this.movieService.movies;


  ngOnInit(): void {
  }

}
