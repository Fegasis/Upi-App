import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayUsingCardsPageRoutingModule } from './pay-using-cards-routing.module';

import { PayUsingCardsPage } from './pay-using-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayUsingCardsPageRoutingModule
  ],
  declarations: [PayUsingCardsPage]
})
export class PayUsingCardsPageModule {}
