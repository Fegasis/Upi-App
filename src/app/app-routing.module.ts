import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'upi-home',
    loadChildren: () => import('./upi-home/upi-home.module').then( m => m.UpiHomePageModule)
  },
  {
    path: 'send-money',
    loadChildren: () => import('./send-money/send-money.module').then( m => m.SendMoneyPageModule)
  },
  {
    path: 'request-money',
    loadChildren: () => import('./request-money/request-money.module').then( m => m.RequestMoneyPageModule)
  },
  {
    path: 'pay-bills',
    loadChildren: () => import('./pay-bills/pay-bills.module').then( m => m.PayBillsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'qr-scanner',
    loadChildren: () => import('./qr-scanner/qr-scanner.module').then( m => m.QrScannerPageModule)
  },
  {
    path: 'paytocontact',
    loadChildren: () => import('./paytocontact/paytocontact.module').then( m => m.PaytocontactPageModule)
  },
  {
    path: 'pay-using-cards',
    loadChildren: () => import('./pay-using-cards/pay-using-cards.module').then( m => m.PayUsingCardsPageModule)
  },
  {
    path: 'get-help',
    loadChildren: () => import('./get-help/get-help.module').then( m => m.GetHelpPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
