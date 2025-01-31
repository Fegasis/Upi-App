import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { Router } from '@angular/router';
import { RazorpayService } from '../services/razorpay.service';

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
    private razorpayService: RazorpayService
  ) { }

  ngOnInit() {
    this.razorpayService.initializeRazorpay();
  }

  payUsingUpiId() {
    const transaction = {
      recipient_upi_id: this.recipient_upi_id,
      user_id: localStorage.getItem('userId'),
      amount: this.amount,
      note: this.note,
    };

    this.transactionService.debitTransaction(transaction).subscribe(
      response => {
        console.log('Money sent successfully:', response);
        this.razorpayService.startPayment(this.amount.toString(), this.recipient_upi_id);
      },
      error => {
        console.error('Error sending money:', error);
      }
    );
  }

  navigateToPayToContact() {
    this.router.navigate(['/paytocontact']);
  }
}
