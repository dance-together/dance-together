import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTrainingeventsComponent } from './group-trainingevents.component';

describe('GroupTrainingeventsComponent', () => {
  let component: GroupTrainingeventsComponent;
  let fixture: ComponentFixture<GroupTrainingeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTrainingeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTrainingeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
