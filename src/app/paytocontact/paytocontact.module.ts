import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaytocontactPageRoutingModule } from './paytocontact-routing.module';

import { PaytocontactPage } from './paytocontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaytocontactPageRoutingModule
  ],
  declarations: [PaytocontactPage]
})
export class PaytocontactPageModule {}
