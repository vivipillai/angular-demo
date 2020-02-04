import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boards, BoardLists, ListTasks } from '../dashboard/dashboard.type';

@Component({
  selector: 'myworkspace-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board: Boards;
  public closeAddNew: Boolean;
  public newListName: String;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.closeAddNew = false;
    this.newListName = "";
    const boards = JSON.parse(localStorage.getItem("boards"));
    this.route.paramMap.subscribe(params => {
      this.board = boards[params.get('boardIndex')];
    });
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
