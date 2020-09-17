import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    const element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.remove('bg-transparent');
      element.classList.add('bg-dark');
    } else {
      element.classList.remove('bg-dark');
      element.classList.add('bg-transparent');
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
