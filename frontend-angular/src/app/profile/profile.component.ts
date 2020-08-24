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
  @Input() receivedUserId: number;
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
        });
      }
    });
  }
  toHome() {
    this.router.navigate(['home']);
  }
}
