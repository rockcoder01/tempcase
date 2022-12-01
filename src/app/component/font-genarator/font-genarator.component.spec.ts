import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontGenaratorComponent } from './font-genarator.component';

describe('FontGenaratorComponent', () => {
  let component: FontGenaratorComponent;
  let fixture: ComponentFixture<FontGenaratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontGenaratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontGenaratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
