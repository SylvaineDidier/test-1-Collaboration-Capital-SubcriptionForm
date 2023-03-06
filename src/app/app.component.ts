import { Component } from '@angular/core';
import { FormsService } from './services/forms.service';
import { subscription_plans } from './shared/datas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  step=0;
  plans: Array<any> = subscription_plans;// Getting subscrition datas
  currentSubs: any = subscription_plans[2] ; // Initializing current subscription
  totalPrice: any= 0;

  /* Forms  */
  subscriptionParamsForm = this.formServ.subscriptionParamsForm;
  paymentDataForm = this.formServ.paymentDataForm;
  confirmationForm = this.formServ.confirmationForm;

  constructor(private formServ: FormsService){}

  // Calculate the total price with reduction when values change
  calculateTotalPrice(){
    this.currentSubs = this.plans[this.subscriptionParamsForm.value.duration]
    let totalPrice= this.currentSubs.price_usd_per_gb * this.subscriptionParamsForm.value?.amount_of_gigabytes;
    this.totalPrice = totalPrice - (this.subscriptionParamsForm.value.upfront_payment? totalPrice*0.1:0)
  }

  /* When Next button is clicked */
  next(){
    this.step = this.step < 2 ? this.step+1: this.step;
  }

  /* When Prev button is clicked */
  prev(){
    this.step = this.step > 0 ? this.step-1: this.step;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.calculateTotalPrice();
    
  }
}
