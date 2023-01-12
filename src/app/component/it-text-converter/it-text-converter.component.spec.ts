import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTextConverterComponent } from './it-text-converter.component';

describe('ItTextConverterComponent', () => {
  let component: ItTextConverterComponent;
  let fixture: ComponentFixture<ItTextConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTextConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTextConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
