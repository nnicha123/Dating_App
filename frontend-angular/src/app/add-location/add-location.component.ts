import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  pages: boolean[];
  originalCounter: number = 0;
  venue: string = '';
  location: object;
  // locationName: string = '';
  // locationImage: string = '';
  // price: string = '';
  // address: string = '';
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
  displayVenue(venue: string) {
    console.log(venue);
    this.venue = venue;
  }
  displayLocation(location: object) {
    console.log(location);
    this.location = location;
  }
}
