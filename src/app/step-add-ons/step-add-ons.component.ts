import { Component } from '@angular/core';
import { StepAddOnsService } from './services/step-add-ons.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepFormService } from '../step-form-nav.service';
import { StepSummaryService } from '../step-summary/services/step-summary.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-step-add-ons',
  standalone:true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './step-add-ons.component.html',
  styleUrl: './step-add-ons.component.scss'
})
export class StepAddOnsComponent {
  constructor(private router: Router, private stepAddOnsService: StepAddOnsService, private stepNavService: StepFormService, private stepSummaryService: StepSummaryService){

  }

  listAddOns:any[];
  form:FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      addOn: new FormControl(false, Validators.requiredTrue)

    })
  this.listAddOns =  this.stepAddOnsService.getListAddOns()

    let summaryValues = this.stepSummaryService.getSummary();
    console.log(summaryValues)

  }

  submit(){
  }

  previousPage(){
    console.log("r44f")

  }

  nextStep(){
    let summaryValues = this.stepSummaryService.getSummary();
    console.log(summaryValues)
    this.router.navigate(['/summary']);
    console.log("fe3de")



  }

}
