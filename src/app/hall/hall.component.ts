import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  color;
  colors = ["#025159", "#03A696", "#F28705", "#F25D27", "#F20505", "#024959", "#027373", "#F2B705", "#F29F05", "#F20505", "#F2B999"];
  
  constructor(public service: MainService) { }

  ngOnInit() {
    let index = 0;
    this.service.Timing.subscribe(
      tick => {
        if(tick%4==0){
          this.color = this.colors[index%this.colors.length];
          index++;
        }
      }
    )
  }

  UpdateBG(){
    
  }

}
