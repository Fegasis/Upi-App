import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { TransactionsService } from './transactions.service';

const { RazorpayCapacitor } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  private razorpayInstance: any;

  constructor(private platform: Platform, private transactionService: TransactionsService,public alertController:AlertController) { }

  initializeRazorpay() {
    console.log('Platform:', this.platform.platforms());
    if (this.platform.is('capacitor')) {
      console.log('Initializing Razorpay');
      this.razorpayInstance = RazorpayCapacitor;
    } else {
      console.error('Razorpay is not available on this platform');
    }
  }
  

  startPayment(amount: string, vpa: string) {
    if (!this.razorpayInstance) {
      console.error('Razorpay instance is not initialized');
      return;
    }

    const options = {
      key: 'rzp_test_5kchqqkEabMJxI',
      amount: amount,
      name: 'RIK HAIT',
      description: 'Send Money',
      prefill: {
        email: 'rikhait2001@gmail.com',
        contact: '8617752078',
        vpa: vpa
      },
      theme: {
        color: '#F37254'
      }
    };

    this.razorpayInstance.open(options).then((payment_id: any) => {
      console.log('Payment successful:', payment_id);
      this.storeTransactionDetails(payment_id, amount, vpa);
    }).catch((error: { description: any; }) => {
      console.log('Payment failed:', error.description);
    });
  }

  storeTransactionDetails(paymentId: string, amount: string, upiId: string) {
    const transaction = {
      paymentId: paymentId,
      amount: amount,
      upiId: upiId,
      date: new Date()
    };

    this.transactionService.storeTransaction(transaction).subscribe(
      response => {
        console.log('Transaction stored successfully:', response);
      },
      error => {
        console.error('Error storing transaction:', error);
      }
    );
  }
}
