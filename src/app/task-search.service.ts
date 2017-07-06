import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Task} from './task/task';
import 'rxjs/add/operator/map';
@Injectable()
export class TaskSearchService {

  constructor(private http: Http) {
  }

  private tasksUrl = 'http://localhost:9090/tasks';  // URL to web

  search(term: string): Observable<Task[]> {
    return this.http
      .get(this.tasksUrl + `/?name=${term}`)
      .map(response => response.json());
  }
}
