import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {RegisterComponent} from './pages/register/register.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren:  () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
        }]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
