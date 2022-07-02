import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'tnv-end-game-item',
  templateUrl: './end-game-item.component.html',
  styleUrls: ['./end-game-item.component.scss']
})
export class EndGameItemComponent implements OnInit {

  @Input() movie: Partial<Movie> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
