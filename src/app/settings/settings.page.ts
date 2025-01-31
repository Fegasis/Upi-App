import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone:false
})
export class SettingsPage implements OnInit {
  settings = {
    notifications: true,
    privacy: true,
    language: 'en'
  };
  constructor(private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {
  }
  updateSettings() {
    this.http.post('your-settings-api-endpoint', this.settings).subscribe(
      response => {
        console.log('Settings updated successfully', response);
        this.navCtrl.navigateForward('/profile');
      },
      error => {
        console.error('Error updating settings:', error);
      }
    );
  }
}
