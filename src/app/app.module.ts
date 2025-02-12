import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SafeUrlPipe } from './safe-url.pipe';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { QrScannerPage } from './qr-scanner/qr-scanner.page';

@NgModule({
  declarations: [AppComponent, SafeUrlPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: QRScanner, useClass: QrScannerPage },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
