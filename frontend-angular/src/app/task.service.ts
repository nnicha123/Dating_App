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
  getProfile(id: number) {
    return this.webReqService.get(`user/profile/${id}`);
  }
  changeProfilePic(id: any, item: string) {
    return this.webReqService.put(`user/${id}`, { profile_pic: item });
  }
  changeAbout(id: any, item: string) {
    return this.webReqService.put(`user/${id}`, { about_me: item });
  }
  updateToSuper(id: any) {
    console.log(id);
    return this.webReqService.put(`user/${id}`, { user_type: 'starred' });
  }
  likeUser(targetId: any) {
    return this.webReqService.post(`relates-to/${targetId}`, {});
  }
  matchUser(targetId: any) {
    return this.webReqService.put(`relates-to/accept/${targetId}`, {});
  }
  getMyRelations() {
    return this.webReqService.get('relates-to/myRelation');
  }
  getRelation(id: number) {
    return this.webReqService.get(`relates-to/getRelation/${id}`);
  }
  addComment(comment: string, heart: number, targetId: number, image: string) {
    console.log(comment, heart, targetId);
    return this.webReqService.post(`profile-comment/receiver/${targetId}`, {
      comment: comment,
      image: image,
      no_of_likes: heart,
    });
  }
  getComments(targetId: number) {
    return this.webReqService.get(`profile-comment/receiver/${targetId}`);
  }
}
