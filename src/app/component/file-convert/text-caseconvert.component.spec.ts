import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCaseConvertComponent } from './text-caseconvert.component';

describe('TextCaseConvertComponent', () => {
  let component: TextCaseConvertComponent;
  let fixture: ComponentFixture<TextCaseConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCaseConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCaseConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
