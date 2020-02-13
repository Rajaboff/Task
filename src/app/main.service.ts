import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private tick = new BehaviorSubject<number>(null);
  constructor() { }

  get Timing(): Observable<number> {

    return this.tick.asObservable();
  }

  UpdateTime(num){
    this.tick.next(num)
  }
}
