import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list.component';
import {LeftFilterComponent} from './left-filter/left-filter.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {InputNumberComponent} from '../../../shared/input-number/input-number.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OwlModule} from 'ngx-owl-carousel';
import {GalleryComponent} from '../../../shared/gallery/gallery.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommentComponent} from '../../../shared/comment/comment.component';
import {SearchCmpComponent} from '../../../shared/search-cmp/search-cmp.component';


@NgModule({
  declarations: [
    ProductListComponent,
    LeftFilterComponent,
    ProductDetailComponent,
    InputNumberComponent,
    GalleryComponent,
    CommentComponent,
    SearchCmpComponent
  ],
  exports: [
    SearchCmpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OwlModule,
    NgSelectModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ProductListModule {
}
