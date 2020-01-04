import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceTravelComponent } from './dance-travel.component';

describe('DanceTravelComponent', () => {
  let component: DanceTravelComponent;
  let fixture: ComponentFixture<DanceTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
