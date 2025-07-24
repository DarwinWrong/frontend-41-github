import { PaymentMethod } from './PaymentMethod.js';
export class GooglePay extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ${amount} using GooglePay`);
  }
}