import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'school-events';
  ngOnInit(){
    window.localStorage.removeItem('events');
    const local = window.localStorage.getItem('events');
    if (!local){
      const all =  [{
        id:1,
        name: 'p1',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        id:2,
        name: 'p2',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        id:3,
        name: 'p3',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        id:4,
        name: 'p4',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      },  {
        // id:5,
        name: 'p5',
        date: new Date(1111,1,1),
        duration: 1,
        classes: ['a','c']
      }
    ];
       localStorage.setItem("events",JSON.stringify(all));
    }
  }
}

