import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceldataComponent } from './exceldata.component';

describe('ExceldataComponent', () => {
  let component: ExceldataComponent;
  let fixture: ComponentFixture<ExceldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
