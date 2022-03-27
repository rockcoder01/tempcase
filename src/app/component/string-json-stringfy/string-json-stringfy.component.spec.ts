import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringJsonStringfyComponent } from './string-json-stringfy.component';

describe('StringJsonStringfyComponent', () => {
  let component: StringJsonStringfyComponent;
  let fixture: ComponentFixture<StringJsonStringfyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringJsonStringfyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringJsonStringfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
