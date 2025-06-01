import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListInfo } from '../models/step-info.model';

@Injectable({
  providedIn: 'root'
})
export class FormStepInfoService {

  constructor() { }

  getAllInputs():Observable<ListInfo[]>{
    let inputsField:ListInfo[] = [
      {label:'Nome', placeholder:'Inserisci il tuo nome..',controlName:'name', type:'text'},
      {label:'Email',placeholder:'Inserisci la tua email..',controlName:'emailAddress', type:'email'},
      {label:'Numero di telefono', placeholder:'Inserisci il tuo numero..', controlName:'phoneNumber', type:'number'}
    ]
    return of(inputsField)
  }
}
