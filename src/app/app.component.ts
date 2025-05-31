import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { StepFormService } from './step-form-nav.service';
import { tap } from 'rxjs';
import { NgStyle } from '@angular/common';

// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  stepForms: any[] = [];
  currentStepNumber: number = 1;

  constructor(private stepFormService: StepFormService) {}

  ngOnInit() {
    this.stepFormService.getStepForm().pipe(
      tap((res) => this.stepForms = res)
    ).subscribe();

    this.stepFormService.currentStep$.subscribe(
      step => this.currentStepNumber = step
    );
  }
}

