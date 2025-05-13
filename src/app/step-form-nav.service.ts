import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepFormService {
  constructor() {}

  getStepForm(): Observable<any> {
   let stepForms = [
    { title:'STEP 1', value: 'LE TUE INFO', route: 'info', number:1 },
    { title:'STEP 2', value: 'SELEZIONA PIANO', route: 'plan', number:2 },
    { title:'STEP 3', value: 'ADD-ONS', route: 'addons', number:3 },
    { title:'STEP 4', value: 'SOMMARIO', route: 'summary', number:4 },
  ];
    return of(stepForms);
  }
}
