import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}
  loginUser(username: string, password: string) {
    console.log(username, password);
    this.taskService.loginUser(username, password).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('TOKEN', res.token);
      this.router.navigate(['my-profile']);
    });
  }
}
