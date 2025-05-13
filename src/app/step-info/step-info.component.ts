import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStepInfoService } from './services/form-step-info.service';
import { tap } from 'rxjs';
import { NgFor,NgIf } from '@angular/common';
import { StepFormService } from '../step-form-nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-info',
  standalone:true,
  imports: [ReactiveFormsModule, NgFor,NgIf],
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.scss'
})
export class StepInfoComponent {
  constructor(private formStepInfoService:FormStepInfoService, private stepFormService: StepFormService, private router: Router){}

  form:FormGroup;
  inputField:any[] = []

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
    console.log(this.form.value);
    this.stepFormService.goToNextStep(); 
    this.router.navigate(['/plan']);

    
  } else {
    console.log("Il form non è valido");
    console.log(this.form.value);

  }
}


  
}



