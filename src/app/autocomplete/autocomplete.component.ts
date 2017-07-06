import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
// Observable class extensions
import "rxjs/add/observable/of";
// Observable operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {Task} from "../task/task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',

})
export class AutocompleteComponent implements OnInit {

  constructor(private taskSearchService: TaskService,
              private router: Router) {
  }

  ngOnInit(): void {

  }


  filteredTasksSingle: any[];


  filterTaskSingle(event) {
    const query = event.query;
    this.taskSearchService.getAllTask().subscribe(tasks => {
      this.filteredTasksSingle = this.filterTask(query, tasks);
    });
  }

  filterTask(query, tasks: any[]): any[] {
    // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(task);
      }
    }
    return filtered;
  }

  gotoDetail(task: Task): void {
    const link = ['/detail', task.id];
    this.router.navigate(link);
  }
}
