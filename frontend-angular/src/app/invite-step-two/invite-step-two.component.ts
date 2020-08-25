import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-invite-step-two',
  templateUrl: './invite-step-two.component.html',
  styleUrls: ['./invite-step-two.component.css'],
})
export class InviteStepTwoComponent implements OnInit {
  oldVenues: object[];

  constructor(private taskService: TaskService) {}

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
