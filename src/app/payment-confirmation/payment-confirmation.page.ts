import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { TransactionsService } from '../services/transactions.service';
import { SuccessModalPage } from '../success-modal/success-modal.page';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.page.html',
  styleUrls: ['./payment-confirmation.page.scss'],
  standalone:false
})
export class PaymentConfirmationPage implements OnInit {
  recipient_upi_id!: string;
  phone_number: string = '';
  biller_id: string=''; 
  amount!: number;
  note!: string;
  dummyPin: string = '';
  showModal:boolean=false;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private transactionService:TransactionsService, private modalCtrl:ModalController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.biller_id = params['biller_id'];
      this.phone_number=params['phone_number'];
      this.recipient_upi_id = params['recipient_upi_id'];
      this.amount = params['amount'];
      this.note = params['note'];
    });
  }

  confirmPayment() {
    const dummyPin = '1234'; 
    console.log('Entered PIN:', this.dummyPin); 
    console.log('Dummy PIN:', dummyPin);
    if (this.dummyPin) {
      this.processTransaction();
    } else {
      alert('Incorrect PIN');
    }
  }

  processTransaction() {
    const userId = localStorage.getItem('userId');
    // const billerId = localStorage.getItem('billerId');
    // const phone_number = localStorage.getItem('phone_number');
    const transaction = {
      biller_id: this.biller_id,
      recipient_phone_number: this.phone_number,
      user_id: userId,
      amount: this.amount,
      note: this.note,
    };
  
    this.transactionService.debitTransaction(transaction).subscribe(
      async response => {
        console.log('Money sent successfully:', response);
        await this.showSuccessModal();
      },
      error => {
        console.error('Error sending money:', error);
      }
    );
  }
  
  getDisplayLabel() {
    const userId = localStorage.getItem('userId');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const billerId = localStorage.getItem('billerId');
  
    if (userId) {
      return 'User ID';
    } else if (phoneNumber) {
      return 'Phone Number';
    } else {
      return 'Biller ID';
    }
  }
  
  getDisplayIdentifier() {
    const userId = localStorage.getItem('userId');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const billerId = localStorage.getItem('billerId');
  
    if (userId) {
      return userId;
    } else if (phoneNumber) {
      return phoneNumber;
    } else {
      return billerId;
    }
  }
  

  async showSuccessModal() {
    const modal = await this.modalCtrl.create({
      component: SuccessModalPage
    });
    await modal.present();
    modal.onDidDismiss().then(() => {
      this.navCtrl.navigateBack('/upi-home');
    });
  }
}
