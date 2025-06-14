import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StepFormNav } from './models/step-form-nav.model';

@Injectable({
  providedIn: 'root',
})
export class StepFormService {
  private stepForms:StepFormNav[] = [
    { title: 'STEP 1', value: 'LE TUE INFO', route: 'info', number: 1 },
    { title: 'STEP 2', value: 'SELEZIONA PIANO', route: 'plan', number: 2 },
    { title: 'STEP 3', value: 'ADD-ONS', route: 'addons', number: 3 },
    { title: 'STEP 4', value: 'SOMMARIO', route: 'summary', number: 4 },
  ];

  private currentStepSubject = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStepSubject.asObservable(); 

  constructor() {}

  getStepForm(): Observable<StepFormNav[]> {
    return of(this.stepForms);
  }

  goToNextStep(): void {
    const current = this.currentStepSubject.value;
    if (current < this.stepForms.length) {
      this.currentStepSubject.next(current + 1);
    }
  }

}
