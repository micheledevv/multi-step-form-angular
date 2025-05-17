import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { StepAddOnsService } from './services/step-add-ons.service';
import { StepSummaryService } from '../step-summary/services/step-summary.service'; // <-- IMPORTA IL SERVICE

@Component({
  selector: 'app-step-add-ons',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor],
  templateUrl: './step-add-ons.component.html',
  styleUrl: './step-add-ons.component.scss'
})
export class StepAddOnsComponent {
  form!: FormGroup;
  listAddOns: any[] = [];

  constructor(
    private router: Router,
    private stepAddonsService: StepAddOnsService,
    private stepSummaryService: StepSummaryService // <-- INIETTA IL SERVICE
  ) {}

  ngOnInit() {
    this.listAddOns = this.stepAddonsService.getListAddOns();

    this.form = new FormGroup({
      addOns: new FormControl<string[]>([])
    });
  }

  toggleAddOn(value: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    const selected = this.form.value.addOns || [];

    if (checked) {
      selected.push(value);
    } else {
      const index = selected.indexOf(value);
      if (index >= 0) selected.splice(index, 1);
    }

    this.form.patchValue({ addOns: selected });
  }

  isAtLeastOneSelected(): boolean {
    return (this.form.value.addOns?.length ?? 0) > 0;
  }

  previousPage() {
    console.log('Vai indietro');
  }

  nextStep() {
    const selectedTitles = this.form.value.addOns || [];

    // Recupera gli oggetti completi (con titolo e prezzo)
    const selectedAddOns = this.listAddOns
      .filter(addOn => selectedTitles.includes(addOn.title))
      .map(addOn => ({
        title: addOn.title,
        price: addOn.price
      }));

    console.log('Add-ons selezionati:', selectedAddOns);

    // Recupera il riepilogo esistente
    const currentSummary = this.stepSummaryService.getSummary();

    // Aggiunge un oggetto per questo step
    const newSummary = [
      ...currentSummary,
      {
        step: 'AddOns', // nome dello step (puoi cambiarlo se preferisci)
        values: selectedAddOns
      }
    ];

    // Salva il nuovo riepilogo
    this.stepSummaryService.setSummary(newSummary);
    console.log('tutti i campi:',this.stepSummaryService.getSummary())

    this.router.navigate(['/summary']);
  }
}
