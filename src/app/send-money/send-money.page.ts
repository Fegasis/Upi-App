import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { Router } from '@angular/router';
import { RazorpayService } from '../services/razorpay.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
  standalone: false
})
export class SendMoneyPage implements OnInit {
  recipient_upi_id: string = '';
  amount: number = 0;
  note: string = '';

  constructor(
    private transactionService: TransactionsService,
    private router: Router,
    private razorpayService: RazorpayService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // this.razorpayService.initializeRazorpay();
  }

  payUsingUpiId() {
    this.navCtrl.navigateForward('/payment-confirmation', {
      queryParams: {
        recipient_upi_id: this.recipient_upi_id,
        amount: this.amount,
        note: this.note
      }
    });
  }

  navigateToPayToContact() {
    this.router.navigate(['/paytocontact']);
  }

}
