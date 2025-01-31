import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.page.html',
  styleUrls: ['./get-help.page.scss'],
  standalone:false
})
export class GetHelpPage implements OnInit {
  help={
    message:''
  }
  constructor(private http:HttpClient, private navCtrl:NavController) { }

  ngOnInit() {
  }
  sendHelpRequest() {
    this.http.post('your-help-api-endpoint', this.help).subscribe(
      response => {
        console.log('Help request sent successfully', response);
        this.navCtrl.navigateForward('/profile');
      },
      error => {
        console.error('Error sending help request:', error);
      }
    );
  }

}
