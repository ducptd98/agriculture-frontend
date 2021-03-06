import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HeaderComponent } from './clientLayouts/header/header.component';
import { FooterComponent } from './clientLayouts/footer/footer.component';
import {HomeModule} from './home/home.module';
import {ProductListModule} from './product-list/product-list.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-list/product-detail/product-detail.component';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ProductListModule,
    RouterModule.forChild(routes),
  ]
})
export class ClientModule { }
