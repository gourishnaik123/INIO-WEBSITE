import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { HotelsComponent } from "./hotels.component";
import { StepperComponent } from "./shared/components/stepper/stepper.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/common/components/shared.module";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoginComponent } from "./shared/components/login/login.component";
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { CommonFooterComponent } from './shared/components/common-footer/common-footer.component';
import { EmailLoginComponent } from './shared/components/email-login/email-login.component';
import { ForgotPasswordComponent } from './shared/components/forgot-password/forgot-password.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SearchResultsComponent } from './shared/components/search-results/search-results.component';
import { DateandpaxPopupComponent } from './shared/components/dateandpax-popup/dateandpax-popup.component';
import { CustomDateAdapter, MY_DATE_FORMATS } from "src/app/common/services/custom-date.adapter";
import { PropertyDetailsComponent } from './shared/components/property-details/property-details.component';
import { AddExperiencesComponent } from './shared/components/add-experiences/add-experiences.component';
import { ViewexperiencePopupComponent } from './shared/components/viewexperience-popup/viewexperience-popup.component';
import { PaxPopupComponent } from './shared/components/pax-popup/pax-popup.component';
import { BookHotelComponent } from './shared/components/book-hotel/book-hotel.component';
import { BookingSummaryComponent } from './shared/components/booking-summary/booking-summary.component';
import { BookingSuccessComponent } from "./shared/components/booking-success/booking-success.component";
import { LoaderComponent } from './shared/components/loader/loader.component';
import { SearchFilterPopupComponent } from './shared/components/search-filter-popup/search-filter-popup.component';


@NgModule({
  declarations: [
    HotelsComponent,
    StepperComponent,
    LoginComponent,
    LandingPageComponent,
    CommonFooterComponent,
    EmailLoginComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SearchResultsComponent,
    DateandpaxPopupComponent,
    PropertyDetailsComponent,
    AddExperiencesComponent,
    ViewexperiencePopupComponent,
    PaxPopupComponent,
    BookHotelComponent,
    BookingSummaryComponent,
    BookingSuccessComponent,
    LoaderComponent,
    SearchFilterPopupComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatExpansionModule,
    RouterModule.forChild([
      {
        path: "",
        component: HotelsComponent,
        children: [],
      },
    ]),
    MatFormFieldModule,
    MatButtonModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
  ],
  providers: [
  
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: CustomDateAdapter } ,
  ],
})
export class HotelsModule {}
