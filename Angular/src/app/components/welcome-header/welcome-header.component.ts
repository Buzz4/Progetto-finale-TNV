import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tnv-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.scss']
})
export class WelcomeHeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';

  

  constructor() { }

  ngOnInit(): void {
  }

}
