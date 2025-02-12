import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone:false
})
export class EditProfilePage implements OnInit {
  profile = {
    name: '',
    email: '',
    phone: '',
    profileImage: null,
    adress:''
  };
  userId!:number;
  constructor(private profileService: ProfileService, private router: Router,private navCtrl:NavController, private modalController:ModalController) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile(this.userId).subscribe(data => {
      this.profile = data;
    });
  }

  updateProfile() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const formData = new FormData();
      formData.append('name', this.profile.name);
      formData.append('email', this.profile.email);
      formData.append('phone', this.profile.phone);
      formData.append('adress', this.profile.adress);

      if (this.profile.profileImage) {
        formData.append('profileImage', this.profile.profileImage);
      }

      this.profileService.updateProfile(Number(userId), formData).subscribe(
        response => {
          console.log('Profile updated successfully', response);
          this.navCtrl.navigateForward('/profile');
        },
        error => {
          console.error('Error updating profile:', error);
        }
      );
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profile.profileImage = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  dismissModal(){
    this.modalController.dismiss();
  }
  triggerFileInput() {
    const fileInput = document.querySelector('.file-input') as HTMLElement;
    fileInput.click();
  }
}
