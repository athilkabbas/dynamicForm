import { Injectable,  EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeCreateLoanApplicationForm = new EventEmitter();    
  invokePreviousLoanApplicationForm = new EventEmitter();
  subsVar: Subscription;  
  subsVar2: Subscription;
  subsVar3: Subscription;
  constructor() { }
  createLoanApplicationForm(){
    this.invokeCreateLoanApplicationForm.emit();
  }
  goBackToPreviousLoanApplicationForm(){
    this.invokePreviousLoanApplicationForm.emit();
  }
}
