import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  color;
  colors = ["#025159", "#03A696", "#F28705", "#F25D27", "#F20505", "#024959", "#027373", "#F2B705", "#F29F05", "#F20505", "#F2B999"];

  constructor() { }

  ngOnInit() {
    let i = interval(1000);
    i.subscribe(tick => {
      if (tick % 4 == 0) {
        this.color = this.colors[tick % this.colors.length];
      }
    });
  }
}
