import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

// import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule }
// from '@angular/material/';

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
import { ProfileComponent } from './profile/profile.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationStepOneComponent } from './location-step-one/location-step-one.component';
import { LocationStepTwoComponent } from './location-step-two/location-step-two.component';
import { LocationStepThreeComponent } from './location-step-three/location-step-three.component';
import { LocationSuccessComponent } from './location-success/location-success.component';
import { DateInviteComponent } from './date-invite/date-invite.component';
import { InviteStepOneComponent } from './invite-step-one/invite-step-one.component';
import { InviteStepTwoComponent } from './invite-step-two/invite-step-two.component';
import { InviteStepThreeComponent } from './invite-step-three/invite-step-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatesComponent } from './dates/dates.component';
import { InviteSuccessComponent } from './invite-success/invite-success.component';

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
    ProfileComponent,
    NavbarAdminComponent,
    AddLocationComponent,
    LocationStepOneComponent,
    LocationStepTwoComponent,
    LocationStepThreeComponent,
    LocationSuccessComponent,
    DateInviteComponent,
    InviteStepOneComponent,
    InviteStepTwoComponent,
    InviteStepThreeComponent,
    DatesComponent,
    InviteSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatSliderModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
