import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashelementComponent } from './dashelement.component';

describe('DashelementComponent', () => {
  let component: DashelementComponent;
  let fixture: ComponentFixture<DashelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
