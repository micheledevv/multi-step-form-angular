import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAddOnsComponent } from './step-add-ons.component';

describe('StepAddOnsComponent', () => {
  let component: StepAddOnsComponent;
  let fixture: ComponentFixture<StepAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAddOnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
