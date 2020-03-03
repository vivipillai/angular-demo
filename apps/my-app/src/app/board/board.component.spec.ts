import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BoardComponent } from './board.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { TaskboardComponent } from '../taskboard/taskboard.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Boards } from '../dashboard/dashboard';
import { Observable } from 'rxjs';
import { AppState } from './../app.state';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let mockBoard: Boards = {
      "boardName": "board1",
      "boardLists": [{
          "listName": "list1",
          "tasks": [{
              "taskName": "task1",
              "taskActive": true
          }]
      }]
  };

  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, TaskboardComponent ],
      providers: [provideMockStore(), Store],
      imports: [RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    component.board = mockBoard;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should add list name on calling addListName', () => {
    component.newListName = "someListName";
    component.addListName("someListName");
    expect(component).toBeTruthy();
  });
});
