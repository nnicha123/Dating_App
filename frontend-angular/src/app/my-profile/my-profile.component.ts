import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  profile: any;
  profilePicChange: boolean;
  editAbout: boolean;
  userId: number;
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.taskService.getUserId().subscribe((res: any) => {
      console.log(res);
      this.profile = res;
      this.userId = res.id;
      console.log(res.id);
    });
    this.profilePicChange = false;
    this.editAbout = false;
  }
  changeProfilePic(item: string) {
    this.taskService
      .changeProfilePic(this.userId, item)
      .subscribe((res: any) => {
        window.location.reload();
      });
  }
  changeAbout(item: string) {
    this.taskService.changeAbout(this.userId, item).subscribe((res: any) => {
      window.location.reload();
    });
  }
  updateToSuper() {
    this.taskService.updateToSuper(this.userId).subscribe((res: any) => {
      window.location.reload();
    });
  }
}
