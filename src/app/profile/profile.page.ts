import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ModalController, NavController } from '@ionic/angular';
import { EditProfilePage } from '../edit-profile/edit-profile.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'], 
  standalone: false
})
export class ProfilePage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: any;

  profile: any = {};
  username: any;
  profile_data: any;
  userId: any;

  constructor(
    private profileService: ProfileService, 
    private http: HttpClient,
    private authService: AuthService,
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.getProfile();
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  getProfile() {
    this.profileService.getProfile(this.userId).subscribe(
      res => {
        this.profile = res;
        console.log('Profile data:', this.profile.items);
        this.profile_data = this.profile.items.find((x: any) => x.user_id == this.userId);
        console.log('Profile:', this.profile_data);
      },
      error => {
        console.error('Error fetching profile:', error);
      }
    );

    // this.username = localStorage.getItem('userName'); 
  }

  updateProfile() {
    this.profileService.updateProfile(1, this.profile).subscribe(
      response => {
        console.log('Profile updated successfully', response);
      },
      error => {
        console.error('Error updating profile:', error);
      }
    );
  }

  uploadProfilePicture(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);

      this.http.post('your-upload-api-endpoint', formData).subscribe(
        response => {
          console.log('Profile picture uploaded successfully', response);
        },
        error => {
          console.error('Error uploading profile picture:', error);
        }
      );
    }
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  async openEditProfile() {
    const modal = await this.modalController.create({
      component: EditProfilePage
    });
    return await modal.present();
  }
  logout() {
    localStorage.removeItem('userToken'); 
    sessionStorage.clear(); 
    console.log('User logged out');  
    this.navCtrl.navigateRoot('/login');
  }  
}