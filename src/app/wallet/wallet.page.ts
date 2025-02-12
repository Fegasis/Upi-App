import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
  standalone:false
})
export class WalletPage implements OnInit {
  userId!: number;
  balance!: number;
  sender_user_id!: number;
  receiver_user_id!: number;
  // transferAmount!: number;
  walletBalance!: number;
  sections: any = {};

  constructor(private http:HttpClient,private walletService:WalletService) { }

  ngOnInit() {
    this.userId = 0;
    this.balance = 0;
    this.sender_user_id = 0;
    this.receiver_user_id = 0;
    // this.transferAmount = 0;
    this.walletBalance = 0;
    this.sections = {
      getBalance: false,
      transferBalance: false
    };
  }
  toggleSection(section: string) {
    this.sections[section] = !this.sections[section];
  }

  addWallet() {
    this.walletService.addWallet(this.userId, this.balance).subscribe(
      data => {
        console.log('Wallet added successfully', data);
      },
      error => {
        console.error('Error adding wallet', error);
      }
    );
  }

  getWalletBalance() {
    this.walletService.getWalletBalance(this.userId).subscribe(
      data => {
        this.walletBalance = data.balance;
      },
      error => {
        console.error('Error fetching wallet balance', error);
      }
    );
  }

  transferBalance() {
    this.walletService.transferBalance(this.sender_user_id, this.receiver_user_id, this.balance).subscribe(
      data => {
        console.log('Transfer successful', data);
      },
      error => {
        console.error('Error transferring balance', error);
        if (error.status === 200) {
          console.error('Unexpected response format:', error.error);
        } else {
          console.error('HTTP Error:', error.message);
        }
      }
    );
  }
  

  // transferToAccount() {
  //   this.walletService.transferToAccount(this.userId, this.balance).subscribe(
  //     data => {
  //       console.log('Transfer to account successful', data);
  //     },
  //     error => {
  //       console.error('Error transferring to account', error);
  //     }
  //   );
  // }

}
