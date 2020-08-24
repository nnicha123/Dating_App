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
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  valueChanged(venue: string, location: object) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    this.taskService.createVenue(venue).subscribe((res: any) => {
      console.log(res);
      this.taskService
        .createLocation(location, res.id)
        .subscribe((res: any) => {
          console.log(res);
        });
    });
  }
  valueDecrement() {
    this.counter = this.counter - 1;
    this.valueChange.emit(this.counter);
  }
}
