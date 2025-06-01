import { Injectable } from '@angular/core';
import { StepAddOns } from '../models/step-addons.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepAddOnsService {

  constructor() { }
  getAllAddOns():Observable<StepAddOns[]>{
    let stepAddOns:StepAddOns[] = [
    {title:'Servizi online', desc:'Accesso a giochi multiplayer',price:'+ €1/mese', type:'checkbox'},
    {title:'Espandi archiviazione', desc:'1TB extra salvataggio cloud',price:'+ €2/mese', type:'checkbox'},
    {title:'Profilo personalizzato', desc:'Personalizza il tema del tuo profilo',price:'+ €2/mese', type:'checkbox'}

    ]
    return of(stepAddOns)
  }

}
