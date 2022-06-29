import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "src/app/models/movie";

@Component({
  selector: 'tnv-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input () movie: Partial<Movie> = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
