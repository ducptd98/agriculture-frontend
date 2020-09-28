import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  thumbnailOpt = {
    items: 1, dots: false

  }

  options = {
    items: 4, dots: false, nav: true,
    navText: [
      '&#x27',
      '&#x27'
    ],
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
      }
    }
  }

  @Input() data = [
    'assets/img/CocoSprout.jpg',
    'assets/img/trust.jpeg',
    'assets/img/MainBG.jpg',
    'assets/img/CitrusMandarins.png'
  ];

  selected = this.data[0];

  constructor() {
  }

  ngOnInit(): void {
  }

}
