import { Injectable } from '@angular/core';
import { ListPlan } from '../models/plan.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepPlanService {

  constructor() { }

  getAllPlans():Observable<ListPlan[]>{
    let listPlans:ListPlan[] = [
    {title:'Arcade', price:'€9/mese', img:'assets/images/icon-arcade.svg'},
    {title:'Avanzato', price:'€12/mese', img:'assets/images/icon-advanced.svg'},
    {title:'Pro', price:'€15/mese', img:'assets/images/icon-pro.svg'}

    ]
    return of(listPlans)
  }

  
}
