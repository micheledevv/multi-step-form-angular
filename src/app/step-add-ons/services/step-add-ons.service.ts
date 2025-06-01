import { Injectable } from '@angular/core';
import { StepAddOns } from '../models/step-addons.model';

@Injectable({
  providedIn: 'root'
})
export class StepAddOnsService {

  constructor() { }

  listAddons:StepAddOns[] = [
    {title:'Servizi online', desc:'Accesso a giochi multiplayer',price:'+ €1/mese', type:'checkbox'},
    {title:'Espandi archiviazione', desc:'1TB extra salvataggio cloud',price:'+ €2/mese', type:'checkbox'},
    {title:'Profilo personalizzato', desc:'Personalizza il tema del tuo profilo',price:'+ €2/mese', type:'checkbox'}

  ]

  getListAddOns(){
    return this.listAddons
  }
}
