import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepPlanService {

  constructor() { }

  listPlan:any[] = [
    {title:'Arcade', price:'€9/mo', img:'assets/images/icon-arcade.svg'},
    {title:'Avanzato', price:'€12/mo', img:'assets/images/icon-advanced.svg'},
    {title:'Pro', price:'€15/mo', img:'assets/images/icon-pro.svg'}


  ]

  getPlan(){
    return this.listPlan;
  }
}
