import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { EventEmitterService } from '../event-emitter.service';
import { MatCheckbox, MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-loanapplication',
  templateUrl: './loanapplication.component.html',
  styleUrls: ['./loanapplication.component.css']
})
export class LoanapplicationComponent implements OnInit,AfterViewInit {
  @Input() loanApplicationDetails: Object = {};
  @Input() loanApplicationKey: string = "";
  @ViewChildren('input') inputs;
  @ViewChildren('checkbox') checkboxs;
  @ViewChildren('button') buttons;
  @ViewChildren('radio') radios;
  index: number;
  formGroup: FormGroup = this.fb.group({});
  routeName: string = "";
  loanApplicationComponent: LoanapplicationComponent;
  touched: boolean = false;
  constructor(private fb: FormBuilder, private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
      let loanApplicationForm = new FormGroup({});
      for(let key in this.loanApplicationDetails){
        loanApplicationForm.addControl(key,new FormControl(''));
      }
      this.formGroup.addControl(this.loanApplicationKey,loanApplicationForm); 
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  Continue(){
      this.eventEmitterService.createLoanApplicationForm();
  }
  back(){
    this.eventEmitterService.goBackToPreviousLoanApplicationForm();
  }
  ngAfterContentInit(){
    if(this.loanApplicationComponent){
      this.formGroup.setControl(this.loanApplicationKey,this.loanApplicationComponent.formGroup.get(this.loanApplicationKey));
  }
 }
}
