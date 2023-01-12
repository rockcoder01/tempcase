import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuTextConverterComponent } from './ru-text-converter.component';

describe('RuTextConverterComponent', () => {
  let component: RuTextConverterComponent;
  let fixture: ComponentFixture<RuTextConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuTextConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuTextConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
