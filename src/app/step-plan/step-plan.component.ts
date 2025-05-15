import { Component } from '@angular/core';
import { StepPlanService } from './services/step-plan.service';

@Component({
  selector: 'app-step-plan',
  standalone:true,
  imports: [],
  templateUrl: './step-plan.component.html',
  styleUrl: './step-plan.component.scss'
})
export class StepPlanComponent {
  constructor(private stepPlanService:StepPlanService){}

  listPlans:any[] = []

  ngOnInit(){
   this.listPlans = this.stepPlanService.getPlan()
   console.log(this.listPlans)
  }

  selectYourPlan(plan:string){
    console.log(plan)
  }

  previousPage(){

  }

  nextStep(){

  }

}
