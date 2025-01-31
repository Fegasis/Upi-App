import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-pay-bills',
  templateUrl: './pay-bills.page.html',
  styleUrls: ['./pay-bills.page.scss'],
  standalone:false
})
export class PayBillsPage implements OnInit {
  bill={user_id:1,amount:0,biller_id:0};
  constructor(private transactionService:TransactionsService) { }

  ngOnInit() {
  }
  payBill(){
    this.transactionService.payBill(this.bill).subscribe(res=>{
      console.log('Bill paid: ',res);      
    })
  }

}
