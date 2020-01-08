import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptrainingeventsComponent } from './grouptrainingevents.component';

describe('GrouptrainingeventsComponent', () => {
  let component: GrouptrainingeventsComponent;
  let fixture: ComponentFixture<GrouptrainingeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouptrainingeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouptrainingeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
