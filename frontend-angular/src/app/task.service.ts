import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private router: Router,
    private webReqService: WebRequestService
  ) {}
  registerUser(user: User) {
    return this.webReqService.post('user/register', user);
  }
  loginUser(username: string, password: string) {
    return this.webReqService.post('user/login', { username, password });
  }
  getAllUsers() {
    return this.webReqService.get('user/');
  }
  getUserId() {
    return this.webReqService.get('user/profile');
  }
}
