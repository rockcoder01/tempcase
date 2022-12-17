import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseConverterComponent } from './title-case-converter.component';

describe('TitleCaseConverterComponent', () => {
  let component: TitleCaseConverterComponent;
  let fixture: ComponentFixture<TitleCaseConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCaseConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
