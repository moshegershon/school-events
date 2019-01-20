import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events: EventModel[];

  constructor(private eventServiceService:EventServiceService) { }

  ngOnInit() {
    this.events = this.eventServiceService.get();
  }
  delete(id: number) {
    this.eventServiceService.delete(id);
  }

}
