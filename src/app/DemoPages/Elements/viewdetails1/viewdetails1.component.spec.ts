import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewdetails1Component } from './viewdetails1.component';

describe('Viewdetails1Component', () => {
  let component: Viewdetails1Component;
  let fixture: ComponentFixture<Viewdetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewdetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
