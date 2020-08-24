import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location-step-two',
  templateUrl: './location-step-two.component.html',
  styleUrls: ['./location-step-two.component.css'],
})
export class LocationStepTwoComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() locationChange = new EventEmitter();
  counter = 0;
  location = { name: '', image: '', price: '', address: '' };
  constructor() {}

  ngOnInit(): void {}
  valueChanged(name: string, image: string, price: string, address: string) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    this.location = { name, image, price, address };
    this.locationChange.emit(this.location);
  }
  valueDecrement() {
    this.counter = this.counter - 1;
    this.valueChange.emit(this.counter);
  }
}
