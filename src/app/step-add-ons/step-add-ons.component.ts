import { Component } from '@angular/core';
import { StepAddOnsService } from './services/step-add-ons.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-add-ons',
  standalone:true,
  imports: [],
  templateUrl: './step-add-ons.component.html',
  styleUrl: './step-add-ons.component.scss'
})
export class StepAddOnsComponent {
  constructor(private stepAddOnsService: StepAddOnsService){

  }

  listAddOns:any[];
  form:FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      addOn: new FormControl('',Validators.required)
    })
  this.listAddOns =  this.stepAddOnsService.getListAddOns()
  console.log(this.listAddOns)

  }

  submit(){
    console.log("test")
  }

  previousPage(){

  }

  nextStep(){

  }

}
