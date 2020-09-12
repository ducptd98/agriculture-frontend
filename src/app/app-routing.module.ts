import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    data: {breadcrumb: 'Admin'}
  },
  {
    path: '',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
    data: {breadcrumb: ''}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
