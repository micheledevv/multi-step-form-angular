import { Component, OnInit } from '@angular/core';
import { StepSummaryService } from './services/step-summary.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-summary.component.html',
  styleUrl: './step-summary.component.scss'
})
export class StepSummaryComponent implements OnInit {
  recap: any[] = [];
  plan: any;
  addOns: any[] = [];
  total: number = 0;

  constructor(private stepSummaryService: StepSummaryService) {}

  ngOnInit(): void {
    this.recap = this.stepSummaryService.getSummary();

    // Estrai il piano
    this.plan = this.recap.find(item => item.piano !== undefined);

    // Estrai gli add-on
    const addOnStep = this.recap.find(item => item.step === 'AddOns');
    this.addOns = addOnStep?.values || [];

    // Calcola il prezzo del piano
    const prezzoPiano = parseInt(this.plan?.prezzo ?? 0);

    // Calcola il prezzo degli add-ons
    const prezzoAddOns = this.addOns.reduce((sum, addOn) => {
      const match = addOn.price.match(/\d+/); // estrae il numero da '+ €1/mese'
      return sum + (match ? parseInt(match[0]) : 0);
    }, 0);

    this.total = prezzoPiano + prezzoAddOns;
  }

  previousPage() {
    console.log('Torna indietro');
  }

  nextStep() {
    console.log('Conferma e invia dati');
  }
}
