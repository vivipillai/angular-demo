import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskboardComponent } from './taskboard.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('TaskboardComponent', () => {
  let component: TaskboardComponent;
  let fixture: ComponentFixture<TaskboardComponent>;
  let mockList = {
      "listName": "list1",
      "tasks": [{
          "taskName": "task1",
          "taskActive": true
      }]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskboardComponent ],
      imports: [
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
    fixture = TestBed.createComponent(TaskboardComponent);
    component = fixture.componentInstance;
    component.boardList = mockList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task name on calling addTask', () => {
    component.newTaskName = "someTasktName";
    component.addTask(mockList, "someTasktName");
    expect(component.newTaskName).toBe("");
  });
});
