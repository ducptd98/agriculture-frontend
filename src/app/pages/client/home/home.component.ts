import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titles = [
    {
      header: 'Đầu tư thành công được rèn thông qua quan hệ đối tác thành công',
      subHeader: `Chào mừng bạn đến tương lai của kinh doanh nông nghiệp`,
      description: `Đa dạng hóa các danh mục đầu tư của bạn hoặc tích hợp theo chiều sâu phát triển nông nghiệp tiếp theo của bạn với Farmshares™ bởi Farmfolio`
    },
    {
      header: 'Sự khởi đầu cho giá trị mới',
      subHeader: `Đầu tư cơ bản hiện tại`,
      description: `Trong suốt lịch sự nông nghiệp đã được chứng minh là một trong những loại tài sản trở lại ổn định nhất. Đầu tư vào tài sãn hữu hunhf sẽ đóng vai trò ngày càng quan
                    trọng trong việc duy trì các quan hệ xã hội toàn cầu.`
    },
    {
      header: 'Tài trợ cho dự án tiếo theo của bạn',
      subHeader: `Vốn cho phát triển nông nghiệp bền vũng`,
      description: `Bạn có hồ sơ ttheo dõi về kinh doanh nông nghiệp thành công?.Hợp tác các nhà đầu tư của chúng tôi để tài trợ chi dự án mở rộng hoặc dự án phát triển mới của bạn.`
    },
  ];
  options = {
    items: 4, dots: false, navigation: false, loop: true, autoplay: true, responsiveClass: true, responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4,
      },
      1280: {
        items: 4,
      }
    }
  }
  openProjects = [
    {
      name: 'Panama Golden Pinapple',
      address: 'La Chorrena, Panama',
      img: 'assets/img/Wholesale.jpg',
      status: 'Bán hết',
      average: '18%',
      price: 1000,
      logo: 'assets/img/Panama-Golden-Pineapple-Logo-2.jpg'
    },
    {
      name: 'Panama Golden Pinapple II',
      address: 'La Chorrena, Panama',
      img: 'assets/img/Pineapples.jpg',
      status: 'Bán hết',
      average: '18%',
      price: 1000,
      logo: 'assets/img/PGP2Logo.png'
    },
    {
      name: 'Ganaderia Pietrasanta II',
      address: 'Monteria, Colombia',
      img: 'assets/img/11915477_xl.jpg',
      status: 'Bán hết',
      average: '18%',
      price: 1000,
      logo: ''
    },
    {
      name: 'Valle Verde',
      address: 'Apartado, Colombia',
      img: 'assets/img/ValleVerdeIcon.jpg',
      status: 'Bán hết',
      average: '18%',
      price: 1000,
      logo: 'assets/img/Valle-Verde-Logo.png'
    },
    {
      name: 'Peru Citrus & Grapes',
      address: 'Peru',
      img: 'assets/img/CitrusMandarins.png',
      status: 'Bán hết',
      average: '18%',
      price: 1000,
      logo: ''
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
