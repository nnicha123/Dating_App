import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-location-step-one',
  templateUrl: './location-step-one.component.html',
  styleUrls: ['./location-step-one.component.css'],
})
export class LocationStepOneComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() venueChange = new EventEmitter();
  @Output() existsChange = new EventEmitter();
  counter = 0;
  venue = '';
  selectFromExistingVenue = '';
  addVenue: boolean;
  oldVenues: object[];
  exists: boolean;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    let venuesOld = [];
    this.addVenue = false;
    this.taskService.getVenues().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        venuesOld.push(res[i].category);
      }
      this.oldVenues = venuesOld;
    });
  }
  valueChanged(venueInput, exists) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    this.venue = venueInput;
    this.exists = exists;
    this.venueChange.emit(this.venue);
    this.existsChange.emit(this.exists);
    // this.valueChange.emit(this.venue);
  }
}
