import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class FormStepInfoService {

  constructor() { }

  getAllInputs():Observable<any>{
    let inputsField = [
      {label:'Nome', placeholder:'Inserisici il tuo nome..',controlName:'name', type:'text'},
      {label:'Email',placeholder:'Inserisici la tua email..',controlName:'emailAddress', type:'email'},
      {label:'Numero di telefono', placeholder:'Inserisici il tuo numero..', controlName:'phoneNumber', type:'number'}
    ]
    return of(inputsField)
  }
}
