import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveleventsComponent } from './travelevents.component';

describe('TraveleventsComponent', () => {
  let component: TraveleventsComponent;
  let fixture: ComponentFixture<TraveleventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraveleventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraveleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
