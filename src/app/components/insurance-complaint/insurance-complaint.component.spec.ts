import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceComplaintComponent } from './insurance-complaint.component';

describe('InsuranceComplaintComponent', () => {
  let component: InsuranceComplaintComponent;
  let fixture: ComponentFixture<InsuranceComplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceComplaintComponent]
    });
    fixture = TestBed.createComponent(InsuranceComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
