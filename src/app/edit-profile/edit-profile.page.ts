import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

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
    phone: ''
  };
  userId!:number;
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile(this.userId).subscribe(data => {
      this.profile = data;
    });
  }

  updateProfile() {
    this.profileService.updateProfile(this.userId,this.profile).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }


}
