import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-invite',
  templateUrl: './date-invite.component.html',
  styleUrls: ['./date-invite.component.css'],
})
export class DateInviteComponent implements OnInit {
  pages: boolean[];
  originalCounter: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.pages = [true, false, false, false];
  }
  displayCounter(count) {
    console.log(count);
    // console.log(this.originalCounter);
    this.originalCounter += count;
    this.pages = [false, false, false, false];
    this.pages[this.originalCounter] = true;
  }
}
