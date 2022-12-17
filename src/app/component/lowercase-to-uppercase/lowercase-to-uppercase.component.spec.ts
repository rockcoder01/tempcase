import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaseToUppercaseComponent } from './lowercase-to-uppercase.component';

describe('LowercaseToUppercaseComponent', () => {
  let component: LowercaseToUppercaseComponent;
  let fixture: ComponentFixture<LowercaseToUppercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowercaseToUppercaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowercaseToUppercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
