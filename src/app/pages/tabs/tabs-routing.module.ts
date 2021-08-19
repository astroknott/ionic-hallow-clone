import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
	path: 'home',
	loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
	path: 'meditate',
	loadChildren: () => import('../meditate/meditate.module').then( m => m.MeditatePageModule)
      },
      {
	path: 'sleep',
	loadChildren: () => import('../sleep/sleep.module').then( m => m.SleepPageModule)
      },
      {
	path: 'community',
	loadChildren: () => import('../community/community.module').then( m => m.CommunityPageModule)
      },
      {
	path: 'me',
	loadChildren: () => import('../me/me.module').then( m => m.MePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
