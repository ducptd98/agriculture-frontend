import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  provinces = [
    'TP.Hồ Chí Minh',
    'Bà Rịa Vũng Tàu',
    'Đồng Tháp',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
