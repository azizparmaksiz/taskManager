import { Component, OnInit } from '@angular/core';
import {Task} from './task';
import {TaskService} from '../task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskArray: Task[];
  constructor(private taskService: TaskService,
              private router: Router) { }

  getAllTask(): void {
    this.taskService.getAllTask().then(tasks => this.taskArray = tasks);
  }

  ngOnInit(): void {
    this.getAllTask();
  }

  editTask(task: Task): void {
    this.router.navigate(['/detail', task.id]);
  }

   deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id)
 .then(() => {
     this.taskArray = this.taskArray.filter(t => t !== task);
   });
  }
}
