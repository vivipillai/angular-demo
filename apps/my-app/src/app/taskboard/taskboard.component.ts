import { Component, OnInit, Input } from '@angular/core';
import { BoardLists, ListTasks } from '../dashboard/dashboard.type';

@Component({
  selector: 'myworkspace-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  public newTaskName: String;


  @Input() 
    boardList: BoardLists;

  constructor() { }

  ngOnInit() {
    console.log(this.boardList);
    this.newTaskName = "";
  }

  addTask(board: BoardLists, taskName: string) {
    if (taskName !== "") {
      const listTask = new ListTasks();
      listTask.taskName = taskName;
      listTask.taskActive = true;
      board.tasks.push(listTask);
      this.newTaskName = "";
    }
  }

}
