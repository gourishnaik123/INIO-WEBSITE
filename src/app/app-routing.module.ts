import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./common/services/auth-gurd.service";
import { LoginComponent } from "./sub-projects/hotels/shared/components/login/login.component";
import { LandingPageComponent } from "./sub-projects/hotels/shared/components/landing-page/landing-page.component";
import { EmailLoginComponent } from "./sub-projects/hotels/shared/components/email-login/email-login.component";
import { ForgotPasswordComponent } from "./sub-projects/hotels/shared/components/forgot-password/forgot-password.component";
import { SignInComponent } from "./sub-projects/hotels/shared/components/sign-in/sign-in.component";
import { SearchResultsComponent } from "./sub-projects/hotels/shared/components/search-results/search-results.component";
import { PropertyDetailsComponent } from "./sub-projects/hotels/shared/components/property-details/property-details.component";
import { AddExperiencesComponent } from "./sub-projects/hotels/shared/components/add-experiences/add-experiences.component";
import { BookHotelComponent } from "./sub-projects/hotels/shared/components/book-hotel/book-hotel.component";
import { BookingSummaryComponent } from "./sub-projects/hotels/shared/components/booking-summary/booking-summary.component";
import { BookingSuccessComponent } from "./sub-projects/hotels/shared/components/booking-success/booking-success.component";




const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {path:"landing-page",component:LandingPageComponent},
  {path:"search-results",component:SearchResultsComponent},
  {path:"email-login",component:EmailLoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'sign-up',component:SignInComponent},
  {path:'property-details',component:PropertyDetailsComponent},
  {path:'add-experiences',component:AddExperiencesComponent},
  {path:'book-hotel',component:BookHotelComponent},
  {path:'booking-summary',component:BookingSummaryComponent},
  {path:'booking-success',component:BookingSuccessComponent},
  
  {
    path: "",
    // canActivate: [AuthGuard], for time being kept off
     canActivate: [AuthGuard],
    loadChildren: () =>
      import("./sub-projects/default/default.module").then(
        (m) => m.DefaultModule
      ),
  },
  {
    path: "hotels/:productId",
    loadChildren: () =>
      import("./sub-projects/hotels/hotels.module").then((m) => m.HotelsModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./sub-projects/error-handling/error-handling.module").then(
        (m) => m.ErrorHandlingModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: "enabledBlocking",
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "legacy",
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
