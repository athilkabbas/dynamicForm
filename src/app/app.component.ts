import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';;
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { EventEmitterService } from './event-emitter.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  index: number = -1;
  loanApplicationArray: any = [];
  loanApplicationList: any = {
    "loanapplicationForm1": {
      "Mobile": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 1
      },
      "DOB": {
        "type": "date",
        "validation": "regex",
        "required": true,
        "order": 2
      },
      "Adhaar": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 3
      },
      "ITProof": {
        "type": "radio",
        "validation": "regex",
        "required": true,
        "order": 4
      },
      "PAN": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 5
      },
      "Email": {
        "type": "email",
        "validation": "regex",
        "required": true,
        "order": 6
      },
      "Confirmation": {
        "type": "checkbox",
        "validation": null,
        "required": false,
        "order": 7
      },
      "Continue": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 8
      }
    },
    "LoanApplicationForm2": {
      "Mobile": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 1
      },
      "DOB": {
        "type": "date",
        "validation": "regex",
        "required": true,
        "order": 2
      },
      "Adhaar": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 3
      },
      "ITProof": {
        "type": "radio",
        "validation": "regex",
        "required": true,
        "order": 4
      },
      "PAN": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 5
      },
      "back": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 1.1
      },
      "Resend Otp": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 1.2
      },
      "Continue": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 1.3
      }
    },
    "LoanApplicationForm3": {
      "asdasda": {
        "type": "text",
        "validation": "regex",
        "required": true,
        "order": 1
      },
      "back": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 1.1
      },
      "Resend Otp": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 1.2
      },
      "Continue": {
        "type": "button",
        "validation": null,
        "required": false,
        "order": 1.3
      }
    }
  };

  public pageInstances = {}
  public pages = []
  componentRef: any;
  constructor(private resolver: ComponentFactoryResolver, private eventEmitterService: EventEmitterService,private router: Router) { 
  }
  @ViewChild("loanApplication", { static: true,read: ViewContainerRef }) container;
  ngOnInit(){
    for(let key in this.loanApplicationList){
      this.pages.push(key)
      this.loanApplicationArray.push({
        "key": key,
        "value": this.loanApplicationList[key]
      });
    }
    
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeCreateLoanApplicationForm.subscribe(() => {    
        this.createLoanApplicationForm();    
      });  
        
    } 
    if (this.eventEmitterService.subsVar2==undefined) {    
      this.eventEmitterService.subsVar2 = this.eventEmitterService.    
      invokePreviousLoanApplicationForm.subscribe(() => {    
        this.createPreviousLoanApplicationForm();    
      });  
        
    } 
    this.createLoanApplicationForm();
  }

  createLoanApplicationForm() {
    ++this.index;
    this.container.clear(); 
    const factory = this.resolver.resolveComponentFactory(LoanapplicationComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.loanApplicationDetails = this.loanApplicationArray[this.index]["value"];
    this.componentRef.instance.loanApplicationKey = this.loanApplicationArray[this.index]["key"];
    this.componentRef.instance.loanApplicationComponent = this.pageInstances[this.pages[this.index]]
    this.pageInstances[this.pages[this.index]] = this.componentRef.instance;
    
  }
  createPreviousLoanApplicationForm(){
    --this.index;
    this.container.clear(); 
    const factory = this.resolver.resolveComponentFactory(LoanapplicationComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.loanApplicationDetails = this.loanApplicationArray[this.index]["value"];
    this.componentRef.instance.loanApplicationKey = this.loanApplicationArray[this.index]["key"];
    this.componentRef.instance.loanApplicationComponent = this.pageInstances[this.pages[this.index]]
  }   


}
