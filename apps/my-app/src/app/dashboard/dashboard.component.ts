import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Boards } from './dashboard';

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
  errorMessage: string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.panelOpenState = false;
    this.boardNameRequired = false;
    this.boardName = "";
    this.boards = [];
    
    this.dashboardService.getBoards().subscribe(
      (boards: Boards[]) => this.boards = boards,
      (err: any) => this.errorMessage = err.error
    );
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
      this.cancelCreateBoard();
    }
  }
}
