import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-upi-home',
  templateUrl: './upi-home.page.html',
  styleUrls: ['./upi-home.page.scss'],
  standalone: false
})
export class UpiHomePage implements OnInit {
  swipperModule = [IonicSlides]
  userId: any;
  name: any;
  email: any;
  recentTransactions: any[] = [];
  offers: any = {};
  balance!: number;
  profile: any = {};
  notifications: any[] = [];
  transactions: any;
  timeOfDay: string = '';
  profile_data:any;
  banners:any[]=[];


  constructor(private transactionService: TransactionsService,private profileService:ProfileService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.getTransactions();
      this.getOffers();
      this.getBalance();
      this.getProfile();
      this.getNotifications();
      this.setTimeOfDay();
    } else {
      console.error('User ID not found in localStorage');
    }

    this.banners = this.profileService.banners;

  }

  getTransactions() {
    this.transactionService.getTransactions(this.userId).subscribe(
      response => {
        console.log('Transactions:', response);
        this.recentTransactions = response;
      },
      error => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  getOffers() {
    this.transactionService.getOffers().subscribe(
      response => {
        console.log('Offers:', response);
        this.offers = response;
      },
      error => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  getBalance() {
    this.transactionService.getBalance(this.userId).subscribe(
      response => {
        console.log('Balance:', response);
        this.balance = response.balance;
      },
      error => {
        console.error('Error fetching balance:', error);
      }
    );
  }

  // getUserByUserId() {
  //   this.authService.getUserById(this.userId).subscribe(
  //     response => {
  //       this.profile = response;
  //       console.log('Profile Details', this.profile.items);
  //     },
  //     error => {
  //       console.error('Error fetching profile:', error);
  //     }
  //   );
  // }

  getProfile() {
    this.profileService.getProfile(this.userId).subscribe(
      res => {
        this.profile = res;
        console.log('User ID', this.userId);
        console.log('Profile data:', this.profile.items);
        this.profile_data = this.profile.items.find((x:any)=>x.user_id==this.userId)
        console.log('Profile:', this.profile_data);
      },
      error => {
        console.error('Error fetching profile:', error);
      }
    );

    // this.username = localStorage.getItem('userName'); 
  }

  getNotifications() {
    this.transactionService.getNotifications(this.userId).subscribe(
      response => {
        console.log('Notifications:', response);
        this.notifications = response;
      },
      error => {
        console.error('Error fetching notifications:', error);
      }
    );
  }

  setTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.timeOfDay = 'morning';
    } else if (hour < 18) {
      this.timeOfDay = 'afternoon';
    } else {
      this.timeOfDay = 'evening';
    }
  }

  sendMoney() {
    console.log('Send Money');
    this.router.navigate(['/send-money']);
  }

  requestMoney() {
    console.log('Request Money');
    this.router.navigate(['/request-money']);
  }

  scanQRCode() {
    console.log('Scan QR Code');
    this.router.navigate(['/qr-scanner']);

  }

  payBills() {
    console.log('Pay Bills');
    this.router.navigate(['/pay-bills']);
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }

  openProfile() {
    this.router.navigate(['/profile']);
  }

  seeAllTransactions() {
    this.router.navigate(['/transactions']);
  }

  signOut() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  quickAccess(feature: string) {
    switch (feature) {
      case 'recentTransactions':
        this.router.navigate(['/transactions']);
        break;
      case 'payToContactNumber':
        this.router.navigate(['/paytocontact']);
        break;
      case 'wallet':
        this.router.navigate(['/wallet']);
        break;
      case 'settings':
        this.router.navigate(['/settings']);
        break;
      default:
        console.log(`Unknown feature: ${feature}`);
    }
  }

  copyInviteKey() {
    const inviteKeyInput = document.getElementById('inviteKey') as HTMLIonInputElement;
    const inviteKey = inviteKeyInput.value;

    if (inviteKey) {
      navigator.clipboard.writeText(inviteKey.toString()).then(() => {
        console.log('Invite key copied to clipboard');
        alert('Invite key copied to clipboard');
      }).catch((error) => {
        console.error('Error copying invite key:', error);
      });
    }
  }

  inviteFriend() {
    const inviteKey = 'so5882f';
    const message = `Join me on this amazing app! Use my invite key: ${inviteKey}`;
    if (navigator.share) {
      navigator.share({
        title: 'Invite a Friend',
        text: message,
        url: window.location.href
      }).then(() => {
        console.log('Invite shared successfully');
      }).catch((error) => {
        console.error('Error sharing invite:', error);
      });
    } else {
      console.log('Web Share API not supported in this browser');
    }
  }
}
