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

  personsConfirmed: any;
  locationsConfirmed: any;
  datesConfirmed: any;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    let personArr = [];
    let locationArr = [];
    let waiting = [];
    this.taskService.getDatesForUser().subscribe((res: any) => {
      waiting = res.filter((el) => el.status == 'pending');
      this.dates = waiting;
      for (let i = 0; i < waiting.length; i++) {
        this.taskService
          .getProfile(waiting[i].receives_invite)
          .subscribe((res: any) => {
            personArr.push(res);
          });
        this.taskService
          .getSingleLocation(waiting[i].location_id)
          .subscribe((res: any) => {
            locationArr.push(res);
          });
      }
      this.locations = locationArr;
      this.persons = personArr;
    });

    let receivedPersonArr = [];
    let receivedLocationArr = [];
    let stillWaiting = [];
    this.taskService.getUserInvited().subscribe((res: any) => {
      stillWaiting = res.filter((el) => el.status == 'pending');
      this.datesReceived = stillWaiting;
      for (let i = 0; i < stillWaiting.length; i++) {
        this.taskService
          .getProfile(stillWaiting[i].sends_invite)
          .subscribe((res: any) => {
            receivedPersonArr.push(res);
          });
        this.taskService
          .getSingleLocation(stillWaiting[i].location_id)
          .subscribe((res: any) => {
            receivedLocationArr.push(res);
          });
      }
      this.locationsReceived = receivedLocationArr;
      this.personsReceived = receivedPersonArr;
    });

    let personConfirmedArr = [];
    let locationConfirmedArr = [];
    let confirmed = [];
    this.taskService.getMyInvites().subscribe((res: any) => {
      confirmed = res.filter((el) => el.status != 'pending');
      this.datesConfirmed = confirmed;
      console.log(this.datesConfirmed);
      for (let i = 0; i < confirmed.length; i++) {
        this.taskService
          .getProfile(confirmed[i].receives_invite)
          .subscribe((res: any) => {
            personConfirmedArr.push(res);
          });
        this.taskService
          .getSingleLocation(confirmed[i].location_id)
          .subscribe((res: any) => {
            locationConfirmedArr.push(res);
          });
      }
      this.locationsConfirmed = locationConfirmedArr;
      this.personsConfirmed = personConfirmedArr;
    });
  }
}
