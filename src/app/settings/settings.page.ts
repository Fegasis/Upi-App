import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
interface ConnectedDevice {
  id: number;
  name: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone:false
})
export class SettingsPage implements OnInit {
  settings = {
    user_id: localStorage.getItem('userId'),
    notifications: 0,
    privacy: 0,
    language: 'default',
    theme: 'system',
    accountSecurity: true
  };
  isModalOpen = false;
  connectedDevices:ConnectedDevice[] = [];
  constructor(private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {
  }
  updateSettings() {
    this.http.post('https://apex.oracle.com/pls/apex/rik/upiapp/settings', this.settings).subscribe(
      response => {
        console.log('Settings updated successfully', response);
        this.navCtrl.navigateForward('/profile');
      },
      error => {
        console.error('Error updating settings:', error);
      }
    );
  }
  manageDevices() {
    this.isModalOpen = true;
    this.http.get('your-connected-devices-api-endpoint').subscribe(
      (devices: any) => {
        this.connectedDevices = devices;
      },
      error => {
        console.error('Error fetching connected devices:', error);
      }
    );
  }

  closeModal() {
    this.isModalOpen = false;
  }

  removeDevice(deviceId: number) {
    this.http.delete(`your-remove-device-api-endpoint/${deviceId}`).subscribe(
      response => {
        console.log('Device removed successfully', response);
        this.connectedDevices = this.connectedDevices.filter(device => device.id !== deviceId);
      },
      error => {
        console.error('Error removing device:', error);
      }
    );
  }

}
