import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  profile: any;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getUserId().subscribe((res: any) => {
      this.profile = res;
    });
  }
}
