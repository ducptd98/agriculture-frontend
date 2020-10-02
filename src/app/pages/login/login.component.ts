import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() registerEvt = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToRegister(): void {
    this.registerEvt.emit(true);
  }
}
