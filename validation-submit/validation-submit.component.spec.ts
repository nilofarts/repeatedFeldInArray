import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSubmitComponent } from './validation-submit.component';

describe('ValidationSubmitComponent', () => {
  let component: ValidationSubmitComponent;
  let fixture: ComponentFixture<ValidationSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
