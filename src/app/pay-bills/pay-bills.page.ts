import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pay-bills',
  templateUrl: './pay-bills.page.html',
  styleUrls: ['./pay-bills.page.scss'],
  standalone:false
})
export class PayBillsPage implements OnInit {
  bill={user_id:'',amount:0,biller_id:''};
  constructor(private transactionService:TransactionsService,private modalCtrl:ModalController, private navCtrl:NavController) { }

  ngOnInit() {
    
  }
  payBill() {
    this.navCtrl.navigateForward('/payment-confirmation', {
      queryParams: {
        biller_id: this.bill.biller_id,
        amount: this.bill.amount
      }
    });
  }

}
