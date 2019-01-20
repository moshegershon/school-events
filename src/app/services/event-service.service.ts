import { Injectable } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  eventList:EventModel[];

  constructor() { }
       
  get(): EventModel[] {
    this.eventList = JSON.parse(localStorage.getItem('events'));
     return this.eventList;

  }
  
  delete(id:number) {
    this.eventList.splice(id, 1);
    window.localStorage.setItem('events', JSON.stringify(this.eventList));
   }

}