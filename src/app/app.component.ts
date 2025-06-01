import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { StepFormService } from './step-form-nav.service';
import { filter, tap } from 'rxjs';
import { NgFor, NgIf, NgStyle } from '@angular/common';

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
  showLayout: boolean = true;

  constructor(
    private stepFormService: StepFormService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.stepFormService.getStepForm().pipe(
      tap((res) => this.stepForms = res)
    ).subscribe();

    this.stepFormService.currentStep$.subscribe(
      step => this.currentStepNumber = step
    );

    // Ascolta le rotte per determinare se mostrare il layout
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      // Lista dei path validi (quelli del layout)
      const validPaths = ['/info', '/plan', '/addons', '/summary'];
      this.showLayout = validPaths.includes(currentUrl);
    });
  }
}
