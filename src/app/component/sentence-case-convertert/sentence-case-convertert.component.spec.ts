import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceCaseConvertertComponent } from './sentence-case-convertert.component';

describe('SentenceCaseConvertertComponent', () => {
  let component: SentenceCaseConvertertComponent;
  let fixture: ComponentFixture<SentenceCaseConvertertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceCaseConvertertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceCaseConvertertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
