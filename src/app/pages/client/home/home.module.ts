import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {OwlCarousel, OwlModule} from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    OwlModule,
  ]
})
export class HomeModule {
}
