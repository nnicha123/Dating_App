import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
})
export class GuestComponent implements OnInit {
  activeTag: boolean[];
  constructor() {}

  ngOnInit(): void {
    this.activeTag = [true, false, false];
  }
}
