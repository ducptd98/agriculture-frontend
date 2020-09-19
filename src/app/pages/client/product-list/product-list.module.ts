import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { LeftFilterComponent } from './left-filter/left-filter.component';



@NgModule({
  declarations: [ProductListComponent, LeftFilterComponent],
  imports: [
    CommonModule
  ]
})
export class ProductListModule { }
