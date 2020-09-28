import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list.component';
import {LeftFilterComponent} from './left-filter/left-filter.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {InputNumberComponent} from '../../../shared/input-number/input-number.component';
import {FormsModule} from '@angular/forms';
import {OwlModule} from 'ngx-owl-carousel';
import {GalleryComponent} from '../../../shared/gallery/gallery.component';


@NgModule({
  declarations: [
    ProductListComponent,
    LeftFilterComponent,
    ProductDetailComponent,
    InputNumberComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OwlModule,
  ]
})
export class ProductListModule {
}
