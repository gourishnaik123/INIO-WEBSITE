import { Component, OnInit } from '@angular/core';
import { Reflector } from 'src/app/common/services/Reflector';


@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.css']
})
export class BookingSuccessComponent implements OnInit {
  userDetails: any;
  firstname: any;
  lastname: any;
  photo: any;
  propertydetails: any;
  constructor(private reflector: Reflector<any>) { }

  ngOnInit(): void {
    this.getGoogleCredentials();
    this.getPropertyDetails();
  }

  // get google profile credentials
  getGoogleCredentials() {
    const tokenPayload = localStorage.getItem("tokenPayload");
    if (tokenPayload) {
      this.userDetails = JSON.parse(tokenPayload);
      // console.log(this.userDetails);

      this.firstname = this.userDetails.given_name;
      this.lastname = this.userDetails.family_name;
      this.photo = this.userDetails.picture;
      this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN,{});
      this.reflector.set(this.reflector.HOOKS.USER_DETAILS,{});
    }
    this.getFacebookCredentials();
    this.getInioCredentials();

  }

  getFacebookCredentials(){
    const tokenPayloads = localStorage.getItem("facebooktoken");
    if (tokenPayloads) {
      this.userDetails = JSON.parse(tokenPayloads);
      console.log(this.userDetails);

      this.firstname = this.userDetails?.first_name;
      this.lastname = this.userDetails?.last_name;
      this.photo = this.userDetails?.picture?.data?.url
    }
  }
  getInioCredentials(){
    const inioPayload = localStorage.getItem('userData')
    if(inioPayload){
      this.userDetails = JSON.parse(inioPayload);
      this.firstname = this.userDetails?.firstName;
      this.lastname = this.userDetails?.lastName;
    }
  }
  homeroute(){
    this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN, undefined)
  }


  getPropertyDetails() {
    const hotelDetails = this.reflector.get(this.reflector.HOOKS.SELECTED_HOTELDETAILS);
    if (hotelDetails) {
      console.log('Hotel Details:', hotelDetails);
      this.propertydetails = hotelDetails
    } else {
      console.error('No hotel details found.');
    }
  }
}
