import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayUsingCardsPage } from './pay-using-cards.page';

const routes: Routes = [
  {
    path: '',
    component: PayUsingCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayUsingCardsPageRoutingModule {}
