import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  value = 0;

  @Input() max = 100;
  @Input() min = 0;
  @Output() valueChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increase(): void {
    this.value++;
    if (this.value > this.max) {
      this.value = this.max;
    }
    this.valueChange.emit(this.value);
  }

  decrease(): void {
    this.value--;
    if (this.value < this.min) {
      this.value = this.min;
    }
    this.valueChange.emit(this.value);
  }


}
