import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-users',
  templateUrl: './super-users.component.html',
  styleUrls: ['./super-users.component.css'],
})
export class SuperUsersComponent implements OnInit {
  superPersons: any[];
  users: any[];
  selectedUserId: number;
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.taskService.getAllUsers().subscribe((res: any) => {
      this.users = res;
      this.superPersons = this.users.filter((el) => el.user_type === 'starred');
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
