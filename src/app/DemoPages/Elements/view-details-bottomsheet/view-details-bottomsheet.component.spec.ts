import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsBottomsheetComponent } from './view-details-bottomsheet.component';

describe('ViewDetailsBottomsheetComponent', () => {
  let component: ViewDetailsBottomsheetComponent;
  let fixture: ComponentFixture<ViewDetailsBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
