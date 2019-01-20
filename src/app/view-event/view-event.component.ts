import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  @Input() event: EventModel;
  @Output() deletEvent:EventEmitter<number>=new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  delete():void{
    this.deletEvent.emit(this.event.id);
  }
}
