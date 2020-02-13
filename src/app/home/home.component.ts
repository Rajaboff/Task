import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  time;
  constructor(public service: MainService) { }

  ngOnInit(): void {
    this.UpdateTime()
  }

  UpdateTime()
  {
    let i=0;
    setInterval(()=>{
      this.time = new Date().toLocaleTimeString();

      this.service.UpdateTime(i)
      i++;
    },1000)
    
  }
}
