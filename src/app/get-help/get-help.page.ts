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
  help = {
    subject: '',
    priority: 'medium',
    message: '',
    attached_file: null,
    user_id: localStorage.getItem('userId'),
  };
  constructor(private http:HttpClient, private navCtrl:NavController) { }
  
  ngOnInit() {
  }
  uploadFile(event:any){
    const file=event.target.files[0];
    if (file) {
      this.help.attached_file=file;
    }
  }
  sendHelpRequest() {
    const formData = new FormData();
    formData.append('subject', this.help.subject);
    formData.append('priority', this.help.priority);
    formData.append('message', this.help.message);
    if (this.help.attached_file) {
      formData.append('attachment', this.help.attached_file);
    }

    console.log(JSON.stringify(this.help));
    

    this.http.post('https://apex.oracle.com/pls/apex/rik/upiapp/getHelp', this.help).subscribe(
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
