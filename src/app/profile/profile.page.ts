import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'], 
  standalone: false
})
export class ProfilePage implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: any;

  profile :any={};
  username: any;
  profile_data:any

  constructor(
    private profileService: ProfileService, 
    private http: HttpClient,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  getProfile() {
    this.profileService.getProfile(1).subscribe(
      res => {
        this.profile = res;
        console.log('Profile data:', this.profile.items);
        this.profile_data = this.profile.items.find((x:any)=>x.user_id===1)
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
}
