import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  time;

  constructor() { }

  ngOnInit(): void {
    let inter = interval(1000);
    inter.subscribe(tick => {this.time = Date.now()});
  }
}
