import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientComponent} from './client.component';

const route: Routes = [
  {
    path: '',
    component: ClientComponent,
    data: {breadcrumb: ''}
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
