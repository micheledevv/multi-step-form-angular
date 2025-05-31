import { Injectable } from '@angular/core';
import { ListPlan } from '../models/plan.model';

@Injectable({
  providedIn: 'root'
})
export class StepPlanService {

  constructor() { }

  listPlan:ListPlan[] = [
    {title:'Arcade', price:'€9/mo', img:'assets/images/icon-arcade.svg'},
    {title:'Avanzato', price:'€12/mo', img:'assets/images/icon-advanced.svg'},
    {title:'Pro', price:'€15/mo', img:'assets/images/icon-pro.svg'}


  ]

  getPlan(){
    return this.listPlan;
  }
  
}
