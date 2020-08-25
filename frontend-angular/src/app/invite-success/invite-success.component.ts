import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-success',
  templateUrl: './invite-success.component.html',
  styleUrls: ['./invite-success.component.css'],
})
export class InviteSuccessComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  toHome() {
    this.router.navigate(['home']);
  }
  toDates() {
    this.router.navigate(['date']);
  }
}
