import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location-step-one',
  templateUrl: './location-step-one.component.html',
  styleUrls: ['./location-step-one.component.css'],
})
export class LocationStepOneComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() venueChange = new EventEmitter();
  counter = 0;
  venue = '';
  constructor() {}

  ngOnInit(): void {}
  valueChanged(venueInput) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    this.venue = venueInput;
    this.venueChange.emit(this.venue);
    // this.valueChange.emit(this.venue);
  }
}
