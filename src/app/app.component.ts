import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'school-events';
  ngOnInit(){
    const local = window.localStorage.getItem('events');
    if (!local){
      const all =  [{
        name: 'p1',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        name: 'p1',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        name: 'p1',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        name: 'p1',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        name: 'p1',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      }
    ];
       localStorage.setItem("events",JSON.stringify(all));
    }
  }
}

