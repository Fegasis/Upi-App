import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
  standalone: false,
})
export class QrScannerPage {
  scannedData!: string;

  constructor(private qrScanner: QRScanner) {}

  async startScan() {
    try {
      // Check if the user has granted camera permission
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        // Start scanning
        await BarcodeScanner.hideBackground(); // Make background transparent
        const result = await BarcodeScanner.startScan(); // Start scanning and wait for a result

        if (result.hasContent) {
          this.scannedData = result.content; // Handle the scanned content
        }

        await BarcodeScanner.showBackground(); // Restore background
      } else if (status.denied) {
        // Camera permission was permanently denied
        // You must guide the user to the settings page to grant the permission
        BarcodeScanner.openAppSettings();
      }
    } catch (error) {
      console.error('Error scanning QR code:', error);
    }
  }
}
