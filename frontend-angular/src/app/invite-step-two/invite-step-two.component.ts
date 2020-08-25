import { Component, OnInit } from '@angular/core';
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
  selectedDestination(selected, i) {
    console.log(selected, i);
    this.selected[i] = !this.selected[i];
  }
}
