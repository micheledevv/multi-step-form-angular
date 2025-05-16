import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-summary',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-summary.component.html',
  styleUrl: './step-summary.component.scss'
})
export class StepSummaryComponent {
  constructor(){}
  form:FormGroup;
nextStep() {
throw new Error('Method not implemented.');
}
previousPage() {
throw new Error('Method not implemented.');
}

}
