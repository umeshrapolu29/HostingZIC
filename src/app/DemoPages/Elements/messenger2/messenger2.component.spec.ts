import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Messenger2Component } from './messenger2.component';

describe('Messenger2Component', () => {
  let component: Messenger2Component;
  let fixture: ComponentFixture<Messenger2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Messenger2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Messenger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
