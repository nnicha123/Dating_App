import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-invite-step-two',
  templateUrl: './invite-step-two.component.html',
  styleUrls: ['./invite-step-two.component.css'],
})
export class InviteStepTwoComponent implements OnInit {
  oldVenues: any[];
  selectedVenue: any;
  selectedVenueId: any;
  selectedLocations: any[];
  selected: boolean[];
  location: object;
  counter = 0;
  @Output() locationChange = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    let venuesOld = [];
    this.taskService.getVenues().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
        venuesOld.push(res[i]);
      }
      this.oldVenues = venuesOld;
    });
  }
  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    // console.log(this.location);
  }
  onChange(selectedVenue: number) {
    this.selectedVenueId = selectedVenue;
    this.taskService
      .getLocations(this.selectedVenueId)
      .subscribe((res: any) => {
        this.selectedLocations = res;
        console.log(res);
        let selectArr = [];
        for (let i = 0; i < res.length; i++) {
          selectArr.push(false);
        }
        this.selected = selectArr;
      });
  }
  valueDecrement() {
    this.counter = this.counter - 1;
    this.valueChange.emit(this.counter);
  }
  selectedDestination(selected, i) {
    console.log(selected, i);
    this.selected[i] = !this.selected[i];
    this.location = selected;
    // console.log(this.location);
    this.locationChange.emit(this.location);
  }
}
