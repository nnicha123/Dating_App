import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[];
  selectedUserId: number;
  showProfile: boolean;
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.showProfile = false;
    this.taskService.getAllUsers().subscribe((res: any) => {
      this.users = res;
      this.showProfile = false;
      console.log(res);
    });
  }
  goToProfile(id: number) {
    this.router.navigate([`profile/${id}`]);
    this.selectedUserId = id;
  }
  likeUser(id: number) {
    console.log(id);
    this.taskService.likeUser(id).subscribe((res: any) => {
      this.router.navigate([`likes`]);
    });
  }
}
