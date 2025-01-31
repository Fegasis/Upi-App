import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pay-using-cards',
  templateUrl: './pay-using-cards.page.html',
  styleUrls: ['./pay-using-cards.page.scss'],
  standalone:false
})
export class PayUsingCardsPage implements OnInit {
  payment = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  };
  constructor(private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {
  }
  processPayment() {
    this.http.post('your-payment-api-endpoint', this.payment).subscribe(
      response => {
        console.log('Payment processed successfully', response);
        this.navCtrl.navigateForward('/profile');
      },
      error => {
        console.error('Error processing payment:', error);
      }
    );
  }


}
