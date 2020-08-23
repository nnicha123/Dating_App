import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
}
