import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionsService } from '../services/transactions.service';
import { Router } from '@angular/router';
import { RazorpayService } from '../services/razorpay.service';

@Component({
  selector: 'app-paytocontact',
  templateUrl: './paytocontact.page.html',
  styleUrls: ['./paytocontact.page.scss'],
  standalone: false
})
export class PaytocontactPage implements OnInit {
  // recipient_upi_id: number = 0;
  phone_number: string = '';
  amount: number = 0;
  note: string = '';

  constructor(private transactionService: TransactionsService,
              private router: Router,
              private razorpayService: RazorpayService) { }

  ngOnInit() {
    this.razorpayService.initializeRazorpay();
  }

  payToContact() {
    const transaction = {
      // recipient_upi_id: this.recipient_upi_id,
      recipient_phone_number: this.phone_number,
      user_id: localStorage.getItem('userId'),
      amount: this.amount,
      // note: this.note,
    };

    this.transactionService.debitTransaction(transaction).subscribe(
      response => {
        console.log('Money sent successfully:', response);
      }
    );
  }
}