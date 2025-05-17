import { Injectable } from '@angular/core';
import { SummaryRecap } from '../models/summary-recap.model';

@Injectable({
  providedIn: 'root'
})
export class StepSummaryService {

  constructor() { }

  listRecap:SummaryRecap[]=[];

  getSummary(){
    return this.listRecap
  }
  setSummary(newSummary: any[]): void {
  this.listRecap = [...newSummary]; 
}
}
