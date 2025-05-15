import { Component } from '@angular/core';
import { StepPlanService } from './services/step-plan.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-plan',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-plan.component.html',
  styleUrl: './step-plan.component.scss'
})
export class StepPlanComponent {
  constructor(private stepPlanService:StepPlanService){}

  listPlans:any[] = []
  form:FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      plan: new FormControl('',[Validators.required])
    })
   this.listPlans = this.stepPlanService.getPlan()
   console.log(this.listPlans)
  }

  selectYourPlan(plan:string){
    console.log(plan)
  }

  previousPage(){

  }

  nextStep(){
    console.log(this.form.value)

  }

}
