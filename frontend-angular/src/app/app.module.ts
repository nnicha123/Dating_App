import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterFailComponent } from './register-fail/register-fail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GuestComponent } from './guest/guest.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { SuperUsersComponent } from './super-users/super-users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatchesComponent } from './matches/matches.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    RegisterFailComponent,
    NavbarComponent,
    GuestComponent,
    FooterComponent,
    HomeComponent,
    NavbarUserComponent,
    SuperUsersComponent,
    MyProfileComponent,
    MatchesComponent,
    LikesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
