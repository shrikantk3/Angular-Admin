import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStepsComponent } from './signup-steps.component';

describe('SignupStepsComponent', () => {
  let component: SignupStepsComponent;
  let fixture: ComponentFixture<SignupStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupStepsComponent]
    });
    fixture = TestBed.createComponent(SignupStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
