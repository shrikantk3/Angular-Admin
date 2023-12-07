import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmtLogoComponent } from './bmt-logo.component';

describe('BmtLogoComponent', () => {
  let component: BmtLogoComponent;
  let fixture: ComponentFixture<BmtLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmtLogoComponent]
    });
    fixture = TestBed.createComponent(BmtLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
