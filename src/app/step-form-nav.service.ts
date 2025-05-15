// step-form-nav.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepFormService {
  private stepForms = [
    { title: 'STEP 1', value: 'LE TUE INFO', route: 'info', number: 1 },
    { title: 'STEP 2', value: 'SELEZIONA PIANO', route: 'plan', number: 2 },
    { title: 'STEP 3', value: 'ADD-ONS', route: 'addons', number: 3 },
    { title: 'STEP 4', value: 'SOMMARIO', route: 'summary', number: 4 },
  ];

  private currentStepSubject = new BehaviorSubject<number>(3);
  currentStep$ = this.currentStepSubject.asObservable(); 

  constructor() {}

  getStepForm(): Observable<any[]> {
    return of(this.stepForms);
  }

  getCurrentStep(): number {
    return this.currentStepSubject.value;
  }

  goToNextStep(): void {
    const current = this.currentStepSubject.value;
    if (current < this.stepForms.length) {
      this.currentStepSubject.next(current + 1);
    }
  }

  goToStep(step: number): void {
    this.currentStepSubject.next(step);
  }
}
