import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPlanComponent } from './step-plan.component';

describe('StepPlanComponent', () => {
  let component: StepPlanComponent;
  let fixture: ComponentFixture<StepPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
