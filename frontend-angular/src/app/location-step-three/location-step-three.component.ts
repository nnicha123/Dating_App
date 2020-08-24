import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-location-step-three',
  templateUrl: './location-step-three.component.html',
  styleUrls: ['./location-step-three.component.css'],
})
export class LocationStepThreeComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;
  @Input() venue: string;
  @Input() location: { name; image; price; address };
  @Input() exists: boolean;
  oldVenueId: any;
  oldVenues: any;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    if (this.exists) {
      this.taskService.getVenues().subscribe((res: any) => {
        console.log(res);
        this.oldVenues = res.filter((el) => el.category == this.venue);
        // console.log(this.oldVenues);
        this.oldVenueId = this.oldVenues[0].id;
        console.log(this.oldVenueId);
      });
    }
  }
  valueChanged(venue: string, location: object) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    if (!this.exists) {
      this.taskService.createVenue(venue).subscribe((res: any) => {
        console.log(res);
        this.taskService
          .createLocation(location, res.id)
          .subscribe((res: any) => {
            console.log(res);
          });
      });
    } else {
      this.taskService
        .createLocation(location, this.oldVenueId)
        .subscribe((res: any) => {
          console.log(res);
        });
    }
  }
  valueDecrement() {
    this.counter = this.counter - 1;
    this.valueChange.emit(this.counter);
  }
}
