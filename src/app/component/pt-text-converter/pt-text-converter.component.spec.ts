import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtTextConverterComponent } from './pt-text-converter.component';

describe('PtTextConverterComponent', () => {
  let component: PtTextConverterComponent;
  let fixture: ComponentFixture<PtTextConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtTextConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtTextConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
