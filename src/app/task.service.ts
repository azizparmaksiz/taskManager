import {Injectable} from "@angular/core";

import {Headers, Http} from "@angular/http";

import "rxjs/add/operator/toPromise";
import {Task} from "./task/task";
import {Observable} from "rxjs/Observable";
@Injectable()
export class TaskService {
  // private tasksUrl = 'api/tasks';  // URL to web enable it when you will use in memory web api
  private tasksUrl = 'http://localhost:9090/tasks';  // URL to web
  constructor(private http: Http) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  // getAllTask(): Promise<Task[]> {
  //   return this.http.get(this.tasksUrl)
  //     .toPromise()
  //     .then(response => response.json().data as Task[])
  //     .catch(this.handleError);
  // }

  getAllTask(): Observable<Task[]> {
    return this.http.get(this.tasksUrl).map(response => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  deleteTask(id: number): Promise<void> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Task)
      .catch(this.handleError);
  }

  createTask(task: Task): Promise<Task> {
    return this.http
      .post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  updateTask(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }
}
