import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


import { QrScannerPage } from './qr-scanner.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { QrScannerPageRoutingModule } from './qr-scanner-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerPageRoutingModule,
    RouterModule.forChild([{ path: '', component: QrScannerPage }])
  ],
  declarations: [QrScannerPage],
  providers: [{provide: QRScanner, useValue: QRScanner}]
})
export class QrScannerPageModule {}
