import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
    
      {
        path: 'clubs',
        loadChildren: () => import('./clubs/clubs.module').then( m => m.ClubsPageModule)
      },
      {
        path: 'corporate',
        loadChildren: () => import('./corporate/corporate.module').then( m => m.CorporatePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'delivery',
        loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/delivery',
        pathMatch: 'full'
      },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
