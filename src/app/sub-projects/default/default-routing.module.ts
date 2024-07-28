import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/common/services/auth-gurd.service';


import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from '../hotels/shared/components/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LandingPageComponent } from '../hotels/shared/components/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileSettingComponent } from './pages/profile-setting/profile-setting.component';
import { EmailLoginComponent } from '../hotels/shared/components/email-login/email-login.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { CancellationRefundComponent } from './pages/cancellation-refund/cancellation-refund.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ViewBookingComponent } from './pages/view-booking/view-booking.component';
import { BookHotelComponent } from '../hotels/shared/components/book-hotel/book-hotel.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent, children: [
      { path: '', redirectTo: 'landing-page', pathMatch: 'full' },   
      {path:'login',component:LoginComponent,canActivate: [AuthGuard]},

      {path:'landing-page',component:LandingPageComponent},
   
      // {path:'default-component',component:DefaultComponent,canActivate: [AuthGuard]},


    ]
  },
  {path:'default-component',component:DefaultComponent,canActivate: [AuthGuard]},
  {path:'contact-us',component:ContactUsComponent},

  // {path:'email-login',component:EmailLoginComponent},
  {path:'blog',component:BlogComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'profile-setting',component:ProfileSettingComponent,canActivate: [AuthGuard]},
  {path:'change-password',component:ChangePasswordComponent,canActivate: [AuthGuard]},
  {path:'bookings-page',component:BookingsPageComponent,canActivate: [AuthGuard]},
  {path:'Cancellations-refund',component:CancellationRefundComponent,canActivate: [AuthGuard]},
  {path:'payment-page',component:PaymentPageComponent,canActivate: [AuthGuard]},
  {path:'booking-details',component:ViewBookingComponent,canActivate: [AuthGuard]},




]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
