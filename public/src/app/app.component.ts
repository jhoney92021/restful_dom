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
  oneTask: any;
  editTask : any;
  deleteTask: any;

  title = 'Welcome to MEAN';
  constructor(private _httpService: HttpService){};

//RUN ON INTILIZATION
  ngOnInit() {
      this.newTask = { title: "", description: ""}
      this.editTask = { title: "", description: ""}  
    }
  getTasksFromService(){
    console.log("*************get hit*************");
    let tempObservable = this._httpService.getTasks();
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.allTasks = data);
    console.log(`*********${this.allTasks}************`);
  }
  postTaskToService(){
    console.log("*************post hit*************");
    let tempObservable = this._httpService.makeTasks(this.newTask);
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.newTask = data)
  }
  deleteTaskFromService(idx){
    console.log("*************delete one hit*************");
    let task_id = this.allTasks['t'][idx]._id;
    console.log(`*********${JSON.stringify(task_id)}************`);
    let tempObservable = this._httpService.deleteTask(task_id);
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.deleteTask = data);
  }
  editTaskInService(task_id){
    console.log("*************edit one hit*************");
    // let task_id = this.allTasks['t'][idx]._id;
    console.log(`*********${JSON.stringify(task_id)}************`);
    console.log(`*********${JSON.stringify(this.editTask)}************`);
    let tempObservable = this._httpService.editTask(task_id, this.editTask);
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.editTask = data);
  }
  getOneTaskFromService(idx){
    console.log("*************get one hit*************");
    let task_id = this.allTasks['t'][idx]._id;
    console.log(`*********${JSON.stringify(task_id)}************`);
    let tempObservable = this._httpService.getOneTask(task_id)
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.oneTask = data);
  }
}
