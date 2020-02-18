import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Boards } from './dashboard';
import { AppState } from './../app.state';
import * as BoardActions from './dashboard.actions'

@Component({
  selector: 'myworkspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public panelOpenState: boolean;
  public boardName: string;
  public boardNameRequired: boolean;
  errorMessage: string;
  boards: Observable<Boards[]>;

  constructor(private store: Store<AppState>) {
    this.boards = store.select('boards');
  }

  ngOnInit() {
    this.panelOpenState = false;
    this.boardNameRequired = false;
    this.boardName = "";    
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
      this.store.dispatch(new BoardActions.AddBoard(newBoard));
      this.cancelCreateBoard();
    }
  }
}
