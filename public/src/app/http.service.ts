import { Injectable } from '@angular/core';
//IMPORT FOR HTTP CLIENT
import { HttpClient } from '@angular/common/http';
//IMPORT FOR HTTP CLIENT

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
        this.getTasks();
   }

   getTasks(){
    return this._http.get('/tasks');       
    }
    makeTasks(newTask){
      return this._http.post('/tasks', newTask);
    }
    deleteTask(id){
      return this._http.delete(`/tasks/${id}`);
      }
    editTask(id, changes){
      return this._http.put(`/tasks/${id}`, changes);
    }
    getOneTask(id){
      return this._http.delete(`/tasks/${id}`);
      }
}
