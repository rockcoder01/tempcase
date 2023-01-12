import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlTextConverterComponent } from './pl-text-converter.component';

describe('PlTextConverterComponent', () => {
  let component: PlTextConverterComponent;
  let fixture: ComponentFixture<PlTextConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlTextConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlTextConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
