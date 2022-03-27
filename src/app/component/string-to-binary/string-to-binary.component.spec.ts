import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringToBinaryComponent } from './string-to-binary.component';

describe('StringToBinaryComponent', () => {
  let component: StringToBinaryComponent;
  let fixture: ComponentFixture<StringToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringToBinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
