import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatingCaseConverterComponent } from './alternating-case-converter.component';

describe('AlternatingCaseConverterComponent', () => {
  let component: AlternatingCaseConverterComponent;
  let fixture: ComponentFixture<AlternatingCaseConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternatingCaseConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternatingCaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
