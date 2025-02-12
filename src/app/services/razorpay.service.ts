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

  constructor(
    private platform: Platform, 
    private transactionService: TransactionsService,
    public alertController: AlertController
  ) { }

  initializeRazorpay() {
    console.log('Platform:', this.platform.platforms());
    if (this.platform.is('capacitor')|| this.platform.is('iphone')) {
      console.log('Initializing Razorpay');
      if (RazorpayCapacitor) {
        this.razorpayInstance = RazorpayCapacitor;
        console.log('Razorpay initialized:', this.razorpayInstance);
      } else {
        console.error('RazorpayCapacitor is undefined');
      }
    } else {
      console.error('Razorpay is not available on this platform');
    }
  }

  async startPayment(amount: string, vpa: string) {
    if (!this.razorpayInstance) {
      console.error('Razorpay instance is not initialized');
      return;
    }
  
    const options = {
      key: 'rzp_test_veAC4EKkqIYRG2',
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
  
    try {
      const payment_id = await this.razorpayInstance.open(options);
      console.log('Payment successful:', payment_id);
      this.storeTransactionDetails(payment_id, amount, vpa);
    } catch (error) {
      const errorMessage = (error as { description: string }).description;
      console.log('Payment failed:', errorMessage);
      this.presentAlert('Payment Failed', errorMessage);
    }
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

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}