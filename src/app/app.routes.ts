import { Routes } from '@angular/router';
import { StepInfoComponent } from './step-info/step-info.component';
import { StepPlanComponent } from './step-plan/step-plan.component';
import { StepAddOnsComponent } from './step-add-ons/step-add-ons.component';
import { StepSummaryComponent } from './step-summary/step-summary.component';

export const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: StepInfoComponent },
  { path: 'plan', component: StepPlanComponent },
  { path: 'addons', component: StepAddOnsComponent },
  { path: 'summary', component: StepSummaryComponent }
];
