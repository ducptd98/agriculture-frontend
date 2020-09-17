import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {OwlCarousel, OwlModule} from 'ngx-owl-carousel';
import { SupplySectionComponent } from './supply-section/supply-section.component';
import { ProductSectionComponent } from './product-section/product-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    SupplySectionComponent,
    ProductSectionComponent,
  ],
  imports: [
    CommonModule,
    OwlModule,
  ]
})
export class HomeModule {
}
