import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../task/task';
import {TaskService} from '../task.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  editMode: boolean;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {

    this.route.paramMap.switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
      .subscribe(task => this.task = task);

    this.editMode = this.task !== null;

  }

  cancel(): void {
    this.router.navigate(['/allTask']);
  }


}
