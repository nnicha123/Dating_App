import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-super-users',
  templateUrl: './super-users.component.html',
  styleUrls: ['./super-users.component.css'],
})
export class SuperUsersComponent implements OnInit {
  superPersons: any[];
  users: any[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllUsers().subscribe((res: any) => {
      this.users = res;
      this.superPersons = this.users.filter((el) => el.user_type === 'starred');
    });
  }
}
