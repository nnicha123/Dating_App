import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
  confirmedDates: [];
  sentRequests: [];
  receivedRequests: [];

  persons: any;
  locations: any;
  dates: any;

  personsReceived: any;
  locationsReceived: any;
  datesReceived: any;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    let personArr = [];
    let locationArr = [];
    this.taskService.getDatesForUser().subscribe((res: any) => {
      this.dates = res;
      for (let i = 0; i < res.length; i++) {
        this.taskService
          .getProfile(res[i].receives_invite)
          .subscribe((res: any) => {
            personArr.push(res);
          });
        this.taskService
          .getSingleLocation(res[i].location_id)
          .subscribe((res: any) => {
            locationArr.push(res);
          });
      }
      this.locations = locationArr;
      this.persons = personArr;
    });

    let receivedPersonArr = [];
    let receivedLocationArr = [];
    this.taskService.getUserInvited().subscribe((res: any) => {
      this.datesReceived = res;
      for (let i = 0; i < res.length; i++) {
        this.taskService
          .getProfile(res[i].sends_invite)
          .subscribe((res: any) => {
            receivedPersonArr.push(res);
          });
        this.taskService
          .getSingleLocation(res[i].location_id)
          .subscribe((res: any) => {
            receivedLocationArr.push(res);
          });
      }
      this.locationsReceived = receivedLocationArr;
      this.personsReceived = receivedPersonArr;
    });
  }

  acceptDate(personId: number) {
    console.log(personId);
    this.taskService
      .modifyDate(personId, { status: 'accepted' })
      .subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      });
  }
  declineDate(personId: number) {
    console.log(personId);
    this.taskService
      .modifyDate(personId, { status: 'declined' })
      .subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      });
  }
}
