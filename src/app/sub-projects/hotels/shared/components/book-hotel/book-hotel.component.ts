import { Component, OnInit } from '@angular/core';
import { Reflector } from 'src/app/common/services/Reflector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { PropertyServices } from 'src/app/common/api/property.api';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css']
})
export class BookHotelComponent implements OnInit {
  userDetails: any;
  firstname: any;
  lastname: any;
  photo: any;
  propertydetails:any;
  rooomAvailablity:any;
  checkincheckout:any;
  newCheckIn:any;
  newCheckout:any;
  totalpax:any
  totalAdults: number = 0; 
  numberOfNights: number = 0;
  noOfchildren:number =0;
  noOfRooms:number=0;
  selectedProprety: any;
  rateplan: any;
  cancellationpolicy: any;
  bookingForm!: FormGroup;
  isLoading: boolean = false;
  strikeprice: number|any;

  constructor(private reflector: Reflector<any>,private fb: FormBuilder,private router: Router,private property:PropertyServices) { }

  ngOnInit(): void {
    this.getGoogleCredentials();
    this.getPropertyDetails();
    this.getRoomAvailablityData();
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      country: ['',Validators.required],
      mobile: ['', Validators.required],
      specialRequest: [''],
      arrivalTime: ['2.00pm - 3.00pm'] // default value
    });

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




 getRoomAvailablityData(){
  this.reflector.get(this.reflector.HOOKS.ROOM_AVAILABILITY_DATA);
  const roomAvailability =   this.reflector.get(this.reflector.HOOKS.ROOM_AVAILABILITY_DATA);
  if (roomAvailability) {
    console.log('room avail Details:', roomAvailability);
    this.rooomAvailablity = roomAvailability
  } else {
    console.error('No room avail details found.');
  }
}
 


  getPropertyDetails() {
    const hotelDetails = this.reflector.get(this.reflector.HOOKS.SELECTED_HOTELDETAILS);
    if (hotelDetails) {
      console.log('Hotel Details:', hotelDetails);
      this.propertydetails = hotelDetails
    } else {
      console.error('No hotel details found.');
    }

    const dates = this.reflector.get(this.reflector.HOOKS.ROOMS_PAYLOAD);
    this.checkincheckout = dates;
    if(dates){
      console.log('dates are:',  this.checkincheckout);
      const checkInDate = new Date(this.checkincheckout.checkIn);
      const checkOutDate = new Date(this.checkincheckout.checkOut);
  
      const options: Intl.DateTimeFormatOptions = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit'
      };
  
      const formattedCheckIn = checkInDate.toLocaleDateString('en-GB', options);
      const formattedCheckOut = checkOutDate.toLocaleDateString('en-GB', options);
      this.newCheckIn = formattedCheckIn
      this.newCheckout = formattedCheckOut
      const formattedDates = `${formattedCheckIn} - ${formattedCheckOut}`;
     const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
     const numberOfDays = timeDifference / (1000 * 3600 * 24);
    this.numberOfNights =numberOfDays
   

    }else{
      console.error('No room availability data found');
    }
    let totalPaxsString = localStorage.getItem('totalPaxs');

    if (totalPaxsString) {
      try {
        // Parse totalPaxs JSON string into JavaScript object
        this.totalpax = JSON.parse(totalPaxsString);

        // Access totalAdults property
        this.totalAdults = this.totalpax.totalAdults;
        this.noOfRooms = this.totalpax.totalRooms;
        this.noOfchildren = this.totalpax.totalChildren;
      } catch (error) {
        console.error('Error parsing totalPaxs JSON:', error);
      }
    } else {
      console.log('totalPaxs not found in localStorage');
    }

    const selectedproperty = this.reflector.get(this.reflector.HOOKS.ROOMS_DETAILS);
    if (selectedproperty ) {
      console.log('prop Details:', selectedproperty );
      this.selectedProprety = selectedproperty
    } else {
      console.error('No hotel details found.');
    }


    // rate plan data
    const rateplan =   this.reflector.get(this.reflector.HOOKS.ROOM_RATEPLAN_DATA);
    if(rateplan){
      console.log('rate plan:', rateplan );
      this.rateplan = rateplan;
      this.strikeprice =   this.rateplan.price.mop - this.rateplan.price.finalPrice
    }else{
      console.error('No  details found.');
    }

    // cancelation policy
    const cancellation =   this.reflector.get(this.reflector.HOOKS.CANCELLATION_POLICY);
    if(cancellation){
      console.log('rate plan:', cancellation );
      this.cancellationpolicy = cancellation
    }else{
      console.error('No  details found.');
    }
  }



  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      this.property.storeBookingData(this.bookingForm.value); 
    this.router.navigate(["/booking-summary"])
    } else {
      console.log("fill form")
      this.bookingForm.markAllAsTouched();
    }
  }
  
  
}
