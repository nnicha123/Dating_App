import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  userId: number;
  statusDisplay: string = 'Like';
  comments: object[];
  @Input() receivedUserId: number;
  totalHearts: number;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userId) {
        this.taskService.getProfile(params.userId).subscribe((res: any) => {
          this.profile = res;
          this.userId = params.userId;
          this.taskService.getRelation(this.userId).subscribe((res: any) => {
            // console.log(res.relation);
            if (res.relation == 'pending' && res.responder_id == this.userId) {
              this.statusDisplay = 'Liked';
            } else if (
              res.relation == 'pending' &&
              res.requester_id == this.userId
            ) {
              this.statusDisplay = 'Like Back';
            } else if (res.relation == 'match') {
              this.statusDisplay = 'Matched';
            }
          });
        });
        let totalHearts = 0;
        this.taskService.getComments(params.userId).subscribe((res: any) => {
          this.comments = res;
          for (let i = 0; i < res.length; i++) {
            totalHearts += Number(res[i].no_of_likes);
          }
          this.totalHearts = totalHearts;
        });
      }
    });
  }
  toHome() {
    this.router.navigate(['home']);
  }
  submitFeedback(comment: string, heart: number, targetId: number) {
    // console.log(comment, heart, targetId);
    this.taskService.getUserId().subscribe((res: any) => {
      console.log(res.profile_pic);
      this.taskService
        .addComment(comment, heart, targetId, res.profile_pic)
        .subscribe((res: any) => {
          window.location.reload();
        });
    });
  }
  changeStatus() {
    console.log(this.userId, this.statusDisplay);
    if (this.statusDisplay == 'Like Back') {
      this.taskService.matchUser(this.userId).subscribe((res: any) => {
        this.router.navigate([`matches`]);
        console.log(res);
      });
    }
    if (this.statusDisplay == 'Like') {
      console.log('Like');
      this.taskService.likeUser(this.userId).subscribe((res: any) => {
        this.router.navigate([`likes`]);
      });
    }
  }
}
