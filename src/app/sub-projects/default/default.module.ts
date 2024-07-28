import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/common/components/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/common/pipe/filter.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../hotels/shared/components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DefaultRoutingModule } from './default-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
// import { BrowserModule } from '@angular/platform-browser';
import {DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule} from '@angular/material/core';
import { FiltersPipe } from 'src/app/common/pipe/filters.pipe';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './pages/contact-us/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CommonHeaderComponent } from './pages/common-header/common-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileSettingComponent } from './pages/profile-setting/profile-setting.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ReusableFooterComponent } from './pages/reusable-footer/reusable-footer.component';
import { ReusableHeadersComponent } from './pages/reusable-headers/reusable-headers.component';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { CancellationRefundComponent } from './pages/cancellation-refund/cancellation-refund.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ViewBookingComponent } from './pages/view-booking/view-booking.component';
import { CustomDateAdapter, MY_DATE_FORMATS } from 'src/app/common/services/custom-date.adapter';
import { ProfileLoaderComponent } from './pages/profile-loader/profile-loader.component';


@NgModule({
  declarations: [
    DefaultComponent,
    // LoginComponent,
    FilterPipe,
    FiltersPipe,
    ContactUsComponent,
    FooterComponent,
    BlogComponent,
    CommonHeaderComponent,
    HomePageComponent,
    ProfileSettingComponent,
    ChangePasswordComponent,
    ReusableFooterComponent,
    ReusableHeadersComponent,
    BookingsPageComponent,
    CancellationRefundComponent,
    PaymentPageComponent,
    ViewBookingComponent,
    ProfileLoaderComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    DefaultRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
    // BrowserModule
  ],
  providers: [
  
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: CustomDateAdapter } ,
  ],
 
})
export class DefaultModule { }
