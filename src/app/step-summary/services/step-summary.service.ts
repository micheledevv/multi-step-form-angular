import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepSummaryService {

  constructor() { }

  listRecap:any[]=[];

  getSummary(){
    return this.listRecap
  }
  setSummary(newSummary: any[]): void {
  this.listRecap = [...newSummary]; 
}
}
