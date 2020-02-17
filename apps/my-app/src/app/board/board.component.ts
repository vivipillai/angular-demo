import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boards, BoardLists, ListTasks } from '../dashboard/dashboard';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'myworkspace-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board: Boards;
  public closeAddNew: Boolean;
  public newListName: String;
  public boards: Boards[];
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.closeAddNew = false;
    this.newListName = "";
    

    this.route.paramMap.subscribe(params => {
      
    this.dashboardService.getBoards().subscribe(
      (boards: Boards[]) => {
        this.boards = boards;
        this.board = this.boards[params.get('boardIndex')];
      },
      (err: any) => this.errorMessage = err.error
    );
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
