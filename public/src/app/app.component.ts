import { Component, /*for implementation*/ OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from './http.service';
//IMPORT FOR HTTP SERVICE

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
implements OnInit 
{
  newTask: any;
  allTasks : any;
  task: any;
  editTask : any;
  deleteTask: any;

  title = 'Welcome to MEAN';
  constructor(private _httpService: HttpService){};

//RUN ON INTILIZATION
  ngOnInit() {
      this.getTasksFromService();
      this.getOneTaskFromService(3);
      // this.newTask = { title: "", description: ""}
      // this.editTask = { title: "", description: ""}
  
    }
  getTasksFromService(){
    console.log("*************get hit*************");
    let tempObservable = this._httpService.getTasks();
    console.log(`*********${tempObservable}************`);
    tempObservable.subscribe(data => this.allTasks = data);
    console.log(`*********${this.allTasks}************`);
  }
  postTaskToService(){
    console.log("*************post hit*************");
    let tempObservable = this._httpService.makeTasks(this.newTask);
    console.log(`*********${tempObservable}************`);
    tempObservable.subscribe(data => this.newTask = data)
  }
  deleteTaskFromService(task_id){
    let tempObservable = this._httpService.deleteTask(task_id);
    tempObservable.subscribe(data => console.log("Deleted a task!", data));
  }
  editTaskInService(task_id, changes){
    let tempObservable = this._httpService.editTask(task_id, changes);
    tempObservable.subscribe(data => console.log("Edited a task!", data));
  }
  getOneTaskFromService(idx){
    console.log("*************get one hit*************");
    let tempObservable = this.allTasks['t'][idx];
    console.log(`*********${tempObservable}************`);
    tempObservable.subscribe(data => this.task = data);
  }


}
