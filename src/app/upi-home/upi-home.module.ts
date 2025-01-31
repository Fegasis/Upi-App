import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpiHomePageRoutingModule } from './upi-home-routing.module';

import { UpiHomePage } from './upi-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpiHomePageRoutingModule
  ],
  declarations: [UpiHomePage]
})
export class UpiHomePageModule {}
