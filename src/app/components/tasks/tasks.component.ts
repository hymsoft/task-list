import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tasks: Task[] = TASKS;
}
