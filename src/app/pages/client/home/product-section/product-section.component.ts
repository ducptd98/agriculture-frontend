import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  options = {
    items: 7, dots: false, nav: false,
    navText: [ '<i class="fa-circle-thin" style="background-color: red"></i>', '<i class="fa-circle-thin" style="background-color: red"></i>' ], responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1568: {
        items: 5
      },
      1800: {
        items: 7
      }
    }
  }
  products = [
    {
      img: 'assets/img/Bananas.png',
      title: 'Chuối',
      des: ''
    },
    {
      img: 'assets/img/Lemon.png',
      title: 'Chanh',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/passion_fruit.png',
      title: 'Passion Fruit',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/cattle-1.png',
      title: 'Gia súc',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/teaktree.png',
      title: 'Cây teak',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/cassava.png',
      title: 'Sắn',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/coffee.png',
      title: 'Cà phê',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/cocoa.png',
      title: 'Ca cao',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/papaya.png',
      title: 'Đu dủ',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/rubber-tree.png',
      title: 'Đu dủ',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/product1.png',
      title: 'Đu dủ',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
    {
      img: 'assets/img/Grapes.png',
      title: 'Đu dủ',
      des: 'Ưu điểm của vôi Ba Tư trong nông nghiệp thương mại so với vôi chủ chốt là ' +
        'gian bảo quản quả lâu hơn. Chúng ít có tính axit hơn chanh chính và không có' +
        'vị đắng cho mượn hương vị độc đáo của vôi. Chanh Ba Tư được thương mại hóa chủ yếu trong sáu kích thước, được gọi là 110, 150, 175, 200, 230 và 250'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
