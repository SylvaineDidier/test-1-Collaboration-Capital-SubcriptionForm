import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private fb: FormBuilder ) { }
  subscriptionParamsForm = this.fb.group({
    duration: [2, [Validators.required]],
    amount_of_gigabytes: [5, [Validators.required]],
    upfront_payment: [false, [Validators.required]],
  });

  paymentDataForm = this.fb.group({
    cc_number: [null, [Validators.required, Validators.pattern('^[ 0-9]*$')]],
    cc_expiration_date: [null, Validators.required],
    cc_security_code: [null, [Validators.required, Validators.maxLength(4)]],
  })

  confirmationForm =  this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    terms: [null, [Validators.requiredTrue]],
  })
}
