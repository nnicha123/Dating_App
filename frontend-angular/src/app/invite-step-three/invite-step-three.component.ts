import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-invite-step-three',
  templateUrl: './invite-step-three.component.html',
  styleUrls: ['./invite-step-three.component.css'],
})
export class InviteStepThreeComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;
  // @Input() exists: boolean;
  personId: number;
  @Input() venue: string;
  @Input() location: any;
  @Input() date: string;
  @Input() time: string;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.taskService
        .inviteDate(this.date, this.time, this.location.id, params.personId)
        .subscribe((res: any) => {
          console.log(res);
        });
    });
  }
  valueChanged(location: any, date: string, time: string) {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }
  valueDecrement() {
    this.counter = this.counter - 1;
    this.valueChange.emit(this.counter);
  }
}
