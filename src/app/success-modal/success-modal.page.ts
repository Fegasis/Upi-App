import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.page.html',
  styleUrls: ['./success-modal.page.scss'],
  standalone:false
})
export class SuccessModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }

}
