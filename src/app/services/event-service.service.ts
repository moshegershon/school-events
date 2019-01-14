import { Injectable } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }
  get(): EventModel[] {
    const all = JSON.parse(localStorage.getItem('events'))
     return all;
}
}