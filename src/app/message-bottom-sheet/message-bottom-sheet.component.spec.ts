import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBottomSheetComponent } from './message-bottom-sheet.component';

describe('MessageBottomSheetComponent', () => {
  let component: MessageBottomSheetComponent;
  let fixture: ComponentFixture<MessageBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
