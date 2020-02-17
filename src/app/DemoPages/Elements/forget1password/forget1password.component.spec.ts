import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forget1passwordComponent } from './forget1password.component';

describe('Forget1passwordComponent', () => {
  let component: Forget1passwordComponent;
  let fixture: ComponentFixture<Forget1passwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forget1passwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forget1passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
