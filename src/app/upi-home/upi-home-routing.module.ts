import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpiHomePage } from './upi-home.page';

const routes: Routes = [
  {
    path: '',
    component: UpiHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpiHomePageRoutingModule {}
