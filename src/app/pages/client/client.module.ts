import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HeaderComponent } from './clientLayouts/header/header.component';
import { FooterComponent } from './clientLayouts/footer/footer.component';
import {HomeModule} from './home/home.module';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
