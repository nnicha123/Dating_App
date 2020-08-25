import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-invite-step-one',
  templateUrl: './invite-step-one.component.html',
  styleUrls: ['./invite-step-one.component.css'],
})
export class InviteStepOneComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  oldVenues: object[];
  ngOnInit(): void {
    let venuesOld = [];
    this.taskService.getVenues().subscribe((res: any) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        venuesOld.push(res[i].category);
      }
      this.oldVenues = venuesOld;
    });
  }
}
