import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideTextConvertorComponent } from './wide-text-convertor.component';

describe('WideTextConvertorComponent', () => {
  let component: WideTextConvertorComponent;
  let fixture: ComponentFixture<WideTextConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideTextConvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideTextConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
