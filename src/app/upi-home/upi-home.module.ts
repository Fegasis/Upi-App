import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpiHomePageRoutingModule } from './upi-home-routing.module';

import { UpiHomePage } from './upi-home.page';
import { SliderComponent } from '../components/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpiHomePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UpiHomePage,SliderComponent]
})
export class UpiHomePageModule {}
