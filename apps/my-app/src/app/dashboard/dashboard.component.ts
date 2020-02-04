import { Component, OnInit } from '@angular/core';
import { Boards } from './dashboard.type';

@Component({
  selector: 'myworkspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public panelOpenState: boolean;
  public boardName: string;
  public boardNameRequired: boolean;
  public boards: Boards[];

  constructor() {}

  ngOnInit() {
    this.panelOpenState = false;
    this.boardNameRequired = false;
    this.boardName = "";
    this.boards = [];
  }

  cancelCreateBoard(): void {
    this.panelOpenState = false;
    this.boardNameRequired = false;
    this.boardName = "";
  }

  createNewBoard(): void {
    if ( this.boardName === "") {
      this.boardNameRequired = true;
    } else {
      const newBoard = new Boards();
      newBoard.boardName = this.boardName;
      newBoard.boardLists = [];
      this.boards.push(newBoard);
      localStorage.setItem("boards", JSON.stringify(this.boards));
      this.cancelCreateBoard();
    }
  }
}
