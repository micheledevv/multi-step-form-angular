import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', loadComponent: () => import('./step-info/step-info.component').then(m => m.StepInfoComponent) },
  { path: 'plan', loadComponent: () => import('./step-plan/step-plan.component').then(m => m.StepPlanComponent) },
  { path: 'addons', loadComponent: () => import('./step-add-ons/step-add-ons.component').then(m => m.StepAddOnsComponent) },
  { path: 'summary', loadComponent: () => import('./step-summary/step-summary.component').then(m => m.StepSummaryComponent) },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  }
];

