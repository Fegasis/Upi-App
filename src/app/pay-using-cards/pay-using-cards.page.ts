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
    user_id: localStorage.getItem('userId'),
    card_number: '',
    expiry_date: '',
    cvv: '',
    cardholder_name: ''
  };
  constructor(private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {
  }
  processPayment() {
    console.log(JSON.stringify(this.payment));
    
    this.http.post('https://apex.oracle.com/pls/apex/rik/upiapp/pay_using_cards', this.payment, { responseType: 'text' }).subscribe(
      response => {
        try {
          const jsonResponse = JSON.parse(response);
          console.log('Payment processed successfully', jsonResponse);
          this.navCtrl.navigateForward('/profile');
        } catch (e) {
          console.error('Error parsing JSON response:', e);
        }
      },
      error => {
        console.error('Error processing payment:', error);
      }
    );
  }
}
