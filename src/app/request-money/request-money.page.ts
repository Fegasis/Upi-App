import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { RazorpayService } from '../services/razorpay.service';

@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.page.html',
  styleUrls: ['./request-money.page.scss'],
  standalone:false
})
export class RequestMoneyPage implements OnInit {
  request={user_id:1,amount:0,requester_id:0};
  constructor(private transactionService:TransactionsService,private razorpayService:RazorpayService) { }

  ngOnInit() {
  }
  requestMoney(){
    this.transactionService.creditTransaction(this.request).subscribe(res=>{
      console.log('Money requested:',res);      
    })
  } 
  requestPayment(amount: string, vpa: string) {
    this.razorpayService.startPayment(amount, vpa);
  }
}
