import { Component } from '@angular/core';
import { StepPlanService } from './services/step-plan.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepSummaryService } from '../step-summary/services/step-summary.service';
import { StepFormService } from '../step-form-nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-plan',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-plan.component.html',
  styleUrl: './step-plan.component.scss'
})
export class StepPlanComponent {
  constructor(private router:Router, private stepPlanService:StepPlanService, private stepSummaryService: StepSummaryService, private stepNavService:StepFormService){}

  listPlans:any[] = []
  planChoose:string;
  form:FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      plan: new FormControl(false) // false = mensile (switch disattivato)

    })
   this.listPlans = this.stepPlanService.getPlan()
  }

  selectYourPlan(planTitle: string) {
  this.planChoose = planTitle;
  const isAnnual = this.form.get('plan')?.value;

  const paymentType = isAnnual ? 'Annuale' : 'Mensile';

  const selectedPlan = {
    piano: this.planChoose,
    tipoPagamento: paymentType
  };

  let summaryValues = this.stepSummaryService.getSummary();

  // Svuoto e inserisco di nuovo il piano selezionato (opzionale)
  summaryValues = summaryValues.filter(item => item.piano === undefined);
  summaryValues.push(selectedPlan);

  this.stepSummaryService.setSummary(summaryValues); 
  console.log(summaryValues)// Se hai un metodo set, meglio ancora
}


  previousPage(){

  }

  nextStep(){
    this.stepNavService.goToNextStep()
    this.router.navigate(['/addons']);

    

  }

}
