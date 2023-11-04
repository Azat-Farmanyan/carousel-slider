import { ComponentFixture, TestBed } from '@angular/core/testing';

import ApplicabilityComponent from './applicability.component';

describe('ApplicabilityComponent', () => {
  let component: ApplicabilityComponent;
  let fixture: ComponentFixture<ApplicabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicabilityComponent],
    });
    fixture = TestBed.createComponent(ApplicabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
