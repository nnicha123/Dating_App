import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invite-step-one',
  templateUrl: './invite-step-one.component.html',
  styleUrls: ['./invite-step-one.component.css'],
})
export class InviteStepOneComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() dateChange = new EventEmitter();
  @Output() timeChange = new EventEmitter();
  counter = 0;
  date: string = '';
  time: string = '';
  constructor() {}

  ngOnInit(): void {}
  valueChanged(date: string, time: string) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    this.date = date;
    this.dateChange.emit(this.date);
    this.time = time;
    this.timeChange.emit(this.time);
    console.log(date, time);
  }
}
