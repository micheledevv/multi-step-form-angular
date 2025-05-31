import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStepInfoService } from './services/form-step-info.service';
import { tap } from 'rxjs';
import { StepFormService } from '../step-form-nav.service';
import { Router } from '@angular/router';
import { StepSummaryService } from '../step-summary/services/step-summary.service';
import {  UserInfo } from './models/user-info.model';

@Component({
  selector: 'app-step-info',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.scss'
})
export class StepInfoComponent {
  constructor(
    private formStepInfoService:FormStepInfoService,
    private stepSummaryService: StepSummaryService,
    private stepFormService: StepFormService,
    private router: Router){}

  form:FormGroup;
  inputField:UserInfo[] = [];


  ngOnInit(){
    
     this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required])
    });

    this.formStepInfoService.getAllInputs().pipe(
      tap((res)=>{
        this.inputField = res
      })
    ).subscribe()

  }

  submit() {
  if (this.form.valid) {
    this.stepFormService.goToNextStep(); 

    this.router.navigate(['/plan']);

    let summaryValues = this.stepSummaryService.getSummary()
    summaryValues.push(this.form.value)

    
  }
}


  
}



