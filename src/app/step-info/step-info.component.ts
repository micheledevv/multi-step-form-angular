import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormStepInfoService } from './services/form-step-info.service';
import { tap } from 'rxjs';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-step-info',
  standalone:true,
  imports: [ReactiveFormsModule, NgFor,NgIf],
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.scss'
})
export class StepInfoComponent {
  constructor(private formStepInfoService:FormStepInfoService){}

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

  submit(){
    console.log(this.form.value)
    console.log("cefe")
  }

}
