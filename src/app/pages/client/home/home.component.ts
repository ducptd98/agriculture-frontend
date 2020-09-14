import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
