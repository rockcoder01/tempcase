import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeCaseConverterComponent } from './snake-case-converter.component';

describe('SnakeCaseConverterComponent', () => {
  let component: SnakeCaseConverterComponent;
  let fixture: ComponentFixture<SnakeCaseConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakeCaseConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakeCaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
