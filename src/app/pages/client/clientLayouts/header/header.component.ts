import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: string;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   const element = document.querySelector('.navbar');
  //   if (this.url === '/home' || this.url === '/') {
  //     if (window.pageYOffset > element.clientHeight) {
  //       element.classList.remove('bg-transparent');
  //       element.classList.add('bg-dark');
  //     } else {
  //       element.classList.remove('bg-dark');
  //       element.classList.add('bg-transparent');
  //     }
  //   }
  // }

  constructor(private router: Router, private viewPortcroller: ViewportScroller) {

  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.url = this.router.url
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        this.viewPortcroller.scrollToPosition([0, 500]);
      });
  }

}
