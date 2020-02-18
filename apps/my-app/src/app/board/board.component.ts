import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Boards, BoardLists, ListTasks } from '../dashboard/dashboard';
import { AppState } from './../app.state';

@Component({
  selector: 'myworkspace-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board: Boards;
  public closeAddNew: Boolean;
  public newListName: String;
  boards: Observable<Boards[]>;
  currentIndex: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    route.paramMap.subscribe(params => {
      this.currentIndex = parseInt(params.get('boardIndex'), 10);
      this.store.select('boards').subscribe((data) => {
        this.board = data[params.get('boardIndex')];
      })
    });}

  ngOnInit() {
    this.closeAddNew = false;
    this.newListName = "";
  }

  addListName(listName: string) {
    if (listName !== "") {
      const boardList = new BoardLists();
      boardList.listName = listName;
      boardList.tasks = [];
      this.board.boardLists.push(boardList);
      this.newListName = "";
    }
  }

}
