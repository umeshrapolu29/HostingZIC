import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Messenger1Component } from './messenger1.component';

describe('Messenger1Component', () => {
  let component: Messenger1Component;
  let fixture: ComponentFixture<Messenger1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Messenger1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Messenger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
