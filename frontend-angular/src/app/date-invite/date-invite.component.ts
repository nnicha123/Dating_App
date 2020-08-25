import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-invite',
  templateUrl: './date-invite.component.html',
  styleUrls: ['./date-invite.component.css'],
})
export class DateInviteComponent implements OnInit {
  pages: boolean[];
  date: string = '';
  time: string = '';
  originalCounter: number = 0;
  venue: string = '';
  location: object;
  @Input() datePersonId: number;
  constructor() {}

  ngOnInit(): void {
    this.pages = [true, false, false, false];
    console.log(this.datePersonId);
  }
  displayCounter(count) {
    console.log(count);
    // console.log(this.originalCounter);
    this.originalCounter += count;
    this.pages = [false, false, false, false];
    this.pages[this.originalCounter] = true;
  }
  displayDate(date: string) {
    this.date = date;
  }
  displayTime(time: string) {
    this.time = time;
  }
  displayVenue(venue: string) {
    console.log(venue);
    this.venue = venue;
  }
  displayLocation(location: object) {
    console.log(location);
    this.location = location;
  }
}
