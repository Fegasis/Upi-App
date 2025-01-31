import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaytocontactPage } from './paytocontact.page';

const routes: Routes = [
  {
    path: '',
    component: PaytocontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaytocontactPageRoutingModule {}
