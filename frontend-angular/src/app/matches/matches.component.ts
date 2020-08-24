import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matches: object[];
  myId: number;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    let matchesArr = [];
    let useId = 0;
    this.taskService.getUserId().subscribe((res: any) => {
      this.myId = res.id;
      console.log(res.id);
      this.taskService.getMyRelations().subscribe((res: any) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          if (res[i].requester_id != this.myId) {
            useId = res[i].requester_id;
          } else {
            useId = res[i].responder_id;
          }
          if (res[i].relation == 'match') {
            this.taskService.getProfile(useId).subscribe((res: any) => {
              matchesArr.push(res);
            });
          }
        }
        this.matches = matchesArr;
      });
    });
  }
}
