import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBottomSheetComponent } from './to-bottom-sheet.component';

describe('ToBottomSheetComponent', () => {
  let component: ToBottomSheetComponent;
  let fixture: ComponentFixture<ToBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
