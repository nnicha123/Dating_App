import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterFailComponent } from './register-fail/register-fail.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { SuperUsersComponent } from './super-users/super-users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatchesComponent } from './matches/matches.component';
import { LikesComponent } from './likes/likes.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'register-fail', component: RegisterFailComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'home', component: HomeComponent },
  { path: 'super-users', component: SuperUsersComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'likes', component: LikesComponent },
  { path: 'profile/:userId', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
