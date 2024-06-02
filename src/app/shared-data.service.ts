import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  currentData = this.dataSubject.asObservable();


  constructor() { }

  changeData(data: any) {
    this.dataSubject.next(data);
  }
}
