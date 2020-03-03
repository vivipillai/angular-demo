import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [provideMockStore()],
      imports: [RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatExpansionModule,
        MatInputModule,
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear the boardName on calling method cancelCreateBoard', () => {
    component.boardName = "someName";
    component.cancelCreateBoard();
    expect(component.boardName).toBe("");
  });

  it('should set boardNameRequired value to true on calling method createNewBoard with empty', () => {
    component.boardName = "";
    component.boardNameRequired = false;
    component.createNewBoard();
    expect(component.boardNameRequired).toBeTruthy();
  });

  it('should create new board on calling method createNewBoard with someName', () => {
    component.boardName = "someName";
    component.createNewBoard();
    expect(component.boardName).toBe("");
  });
});
