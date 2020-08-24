import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  likes: object[];
  myLikes: object[];
  myId: number;
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    let likesArr = [];
    let myLikesArr = [];
    this.taskService.getUserId().subscribe((res: any) => {
      this.myId = res.id;
      this.taskService.getMyRelations().subscribe((res: any) => {
        for (let i = 0; i < res.length; i++) {
          if (
            res[i].relation == 'pending' &&
            res[i].requester_id != this.myId
          ) {
            this.taskService
              .getProfile(res[i].requester_id)
              .subscribe((res: any) => {
                likesArr.push(res);
              });
          } else if (res[i].relation == 'pending') {
            this.taskService
              .getProfile(res[i].responder_id)
              .subscribe((res: any) => {
                console.log(res);
                myLikesArr.push(res);
              });
          }
        }
        this.likes = likesArr;
        this.myLikes = myLikesArr;
      });
    });
  }
  goToProfile(id: number) {
    this.router.navigate([`profile/${id}`]);
  }
  matchPerson(id: number) {
    console.log(id);
    this.taskService.matchUser(id).subscribe((res: any) => {
      this.router.navigate([`matches`]);
      console.log(res);
    });
  }
}
