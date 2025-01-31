import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone:false
})
export class TransactionsPage implements OnInit {
  userId=1;
  creditAmount!:number;
  debitAmount!:number;
  transactions:any[]=[];
  constructor(private transactionService:TransactionsService) { }

  ngOnInit() {
    this.getTransactions()
  }
  creditTransaction(){
    const transaction={user_id:this.userId,amount:this.creditAmount};
    this.transactionService.creditTransaction(transaction).subscribe(res=>{
      console.log('Credit transaction successful:',res);
      this.getTransactions();      
    })
  }
  getTransactions(){
    this.transactionService.getTransactions(this.userId).subscribe(res=>{
      this.transactions=res;
      if(this.transactions){

        for(const item of this.transactions){
          console.log('amount',item.AMOUNT);
        }}else{
          console.log("No data");
          
        }
      
      

      console.log("Transaction" + this.transactions[0]);
      
    })
  }
  debitTransaction(){
    const transaction={user_id:this.userId,amount:this.debitAmount};
    this.transactionService.debitTransaction(transaction).subscribe(res=>{
      console.log('Debit transaction successful:',res);
      this.getTransactions();
    })
  }
}
