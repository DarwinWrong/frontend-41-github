import { PaymentMethod } from './PaymentMethod.js';
export class ApplePay extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ${amount} using ApplePay`);
  }
}