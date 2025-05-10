import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { StepFormService } from './step-form-nav.service';
import { tap } from 'rxjs';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, NgFor, RouterLink, RouterModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private stepFormService:StepFormService){

  }
  title = 'multi-step-form';
  stepForms:any;

  ngOnInit(){
    this.stepFormService.getStepForm().pipe(
      tap((res) => {
        console.log(res)
        this.stepForms = res;

      })

    ).subscribe()
  }
}
