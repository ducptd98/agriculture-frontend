import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ViewportScroller} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private router: Router, private viewPortcroller: ViewportScroller, private modalService: NgbModal) {

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

  openModal(content) {
    this.modalService.open(content, {centered: true, size: 'lg'});
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  openRegisterOrLogin(name) {
    this.modalService.dismissAll();
    this.modalService.open(name, {centered: true, size: 'lg'})
  }
}
