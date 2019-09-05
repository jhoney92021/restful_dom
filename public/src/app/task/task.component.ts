import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() oneTaskChild: any;/*ADDED FOR INPUT, 
                            WHICH TAKES 
                            FROM PARENT COMPONENT*/
  constructor() { }

  ngOnInit() {
  }

}
