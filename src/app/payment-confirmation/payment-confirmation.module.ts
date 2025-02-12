import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentConfirmationPageRoutingModule } from './payment-confirmation-routing.module';

import { PaymentConfirmationPage } from './payment-confirmation.page';
// import { SuccessModalComponent } from '../components/success-modal/success-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentConfirmationPageRoutingModule
  ],
  declarations: [PaymentConfirmationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PaymentConfirmationPageModule {}
