import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseToLowercaseComponent } from './uppercase-to-lowercase.component';

describe('UppercaseToLowercaseComponent', () => {
  let component: UppercaseToLowercaseComponent;
  let fixture: ComponentFixture<UppercaseToLowercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppercaseToLowercaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercaseToLowercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
