import { Component, OnInit } from '@angular/core';
import { Reflector } from 'src/app/common/services/Reflector';
import { DateandpaxPopupComponent } from '../dateandpax-popup/dateandpax-popup.component';
import { PaxPopupComponent } from '../pax-popup/pax-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { BookingRequestSavedParams } from "src/app/common/models/booking.model";
import { Router, RouterLink } from "@angular/router";
import { PropertyServices } from 'src/app/common/api/property.api';
import { PaxRooms } from 'src/app/common/models/roompaxs.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  searchParams: any;
  userDetails: any;
  firstname: any;
  lastname: any;
  photo: any;
  roomAvailabilityData: any;
  roomValue: any;
  checkincheckout: any;
  newCheckIn: any;
  newCheckout: any;
  destinationOptions: { destinationName: string }[] = [];
  showText: boolean = true;
  checkInDate: Date | any;
  checkOutDate: Date | any;
  roomsAndPaxs: PaxRooms[] = [
    { roomId: 0, roomName: "", paxs: { adults: 2, childrens: [] } },
  ];
  selectedDestination: string | null = null;
  isLoading: boolean = false;
  numberOfNights: number = 0;
  totalAdults: number = 2;
  totalChildrens: number = 0;
  selectedNationality: any;
  bookingRequestSavedParams: BookingRequestSavedParams = {} as BookingRequestSavedParams;
  displayLimits!: number[];
  roomdetails = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
  ];
  roomsdata:any;
  rules = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  question = [{}, {}, {}, {}];
 
  backgroundImage!: string;
  backgroundStyle!: string;
  expandedCards: boolean[] = [];
  hoteldatas: any;
  totalpax: any;
  noOfRooms: any;
  noOfchildren: any;
  totalAdultsCount: any;

  constructor(
    private reflector: Reflector<any>,
    public dialog: MatDialog,
    private router: Router,
    private savedParamsReflector: Reflector<BookingRequestSavedParams>,
    private api: PropertyServices
  ) {}

  ngOnInit(): void {
    this.getGoogleCredentials();
    this.getRoomAvailablityData();
    this.getAdultChildcount();
  
    if (this.hoteldatas.hotelImageUrl.length > 0) {
      this.backgroundImage = this.hoteldatas.hotelImageUrl[0];
      this.backgroundStyle = `linear-gradient(180deg, rgba(0, 0, 0, 0) 73%, rgba(0, 0, 0, 0.82) 100%), url(${this.backgroundImage})`;

    }
    this.getRoomsdata();
    this.getAllDestinations();
    
  }

  changeBackground(image: any) {
    this.backgroundImage = image;
    this.backgroundStyle = `linear-gradient(180deg, rgba(0, 0, 0, 0) 73%, rgba(0, 0, 0, 0.82) 100%), url(${image})`;
  }

  

  getGoogleCredentials() {
    const tokenPayload = localStorage.getItem("tokenPayload");
    if (tokenPayload) {
      this.userDetails = JSON.parse(tokenPayload);
      this.firstname = this.userDetails.given_name;
      this.lastname = this.userDetails.family_name;
      this.photo = this.userDetails.picture;
      this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN, {});
      this.reflector.set(this.reflector.HOOKS.USER_DETAILS, {});
    }
    this.getFacebookCredentials();
    this.getInioCredentials();
  }

  getFacebookCredentials() {
    const tokenPayloads = localStorage.getItem("facebooktoken");
    if (tokenPayloads) {
      this.userDetails = JSON.parse(tokenPayloads);
      console.log(this.userDetails);
      this.firstname = this.userDetails?.first_name;
      this.lastname = this.userDetails?.last_name;
      this.photo = this.userDetails?.picture?.data?.url;
    }
  }

  getInioCredentials() {
    const inioPayload = localStorage.getItem('userData');
    if (inioPayload) {
      this.userDetails = JSON.parse(inioPayload);
      this.firstname = this.userDetails?.firstName;
      this.lastname = this.userDetails?.lastName;
    }
  }


  getAdultChildcount(){
    let totalPaxsString = localStorage.getItem('totalPaxs');

    if (totalPaxsString) {
      try {
        // Parse totalPaxs JSON string into JavaScript object
        this.totalpax = JSON.parse(totalPaxsString);

        // Access totalAdults property
        this.totalAdultsCount = this.totalpax.totalAdults;
        this.noOfRooms = this.totalpax.totalRooms;
        this.noOfchildren = this.totalpax.totalChildren;

        console.log("adult count is",this.totalAdults);
        console.log("children count is ",this.noOfchildren)
      } catch (error) {
        console.error('Error parsing totalPaxs JSON:', error);
      }
    } else {
      console.log('totalPaxs not found in localStorage');
    }
  }
  get adultsArray(): number[] {
    return Array(this.totalAdultsCount).fill(0);
  }
  get childArray(): number[] {
    return Array(this.noOfchildren).fill(0);
  }
  homeroute() {
    this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN, undefined);
  }

  datepaxdialogue() {
    const dialogRef = this.dialog.open(DateandpaxPopupComponent, {
      width: '651px',
      height: 'auto',
      data: {
        checkInDate:  this.roomsdata.checkIn, 
        checkOutDate: this.roomsdata.checkOut
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log('Selected Date:', result);
        this.roomsdata.checkIn = result.checkInDate;
        this.roomsdata.checkOut = result.checkOutDate;
      }
    });
  }

  paxpopup() {
    const dialogRef = this.dialog.open(PaxPopupComponent, {
      width: '400.01px',
      height: '380.5px',
      data: this.roomsAndPaxs,
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.roomsAndPaxs = result;
        console.log("data is", this.roomsAndPaxs);
        this.calculateTotalPaxs();
      } else {
        console.log("Dialog closed without changes");
      }
    });
  }
  

  getAllDestinations() {
    this.api.fetchAllPropertiesUnderAChain().subscribe((res: any[]) => {
      this.showText = false;
      this.destinationOptions = res.map((element: any) => ({
        destinationName: element.destinationName
      }));
      // if (this.destinationOptions.length > 0) {
      //   this.selectedDestination = this.destinationOptions[0].destinationName;
      // }
      
      this.selectedDestination = this.roomsdata.selectedDestination;
      console.log(this.selectedDestination)
      // console.log(this.destinationOptions);
    });
  }

  toggleAmenities(index: number) {
    this.expandedCards[index] = !this.expandedCards[index];
  }

 
  getVisibleAmenities(amenities: string[], index: number) {
    if (this.expandedCards[index]) {
      return amenities;
    } else {
      return amenities.slice(0, 4);
    }
  }


  getRoomAvailablityData() {
    this.isLoading = true;
    const data = this.reflector.get(this.reflector.HOOKS.ROOM_AVAILABILITY_DATA);
    this.roomAvailabilityData = data;

    if (data) {
      console.log('Room Availability Data:', this.roomAvailabilityData);
      this.roomValue = this.roomAvailabilityData.hotelDetails[0].roomsNew;
      // this.expandedCards = this.roomValue.map(() => false);
      this.expandedCards = new Array(this.roomValue.length).fill(false);

      console.log("### new room data is ###", this.roomValue);
      this.isLoading = false;
    } else {
      console.error('No room availability data found');
      this.router.navigate(["/"]);
    }
    // SELECTED_HOTELDETAILS

    const dates = this.reflector.get(this.reflector.HOOKS.ROOMS_PAYLOAD);
    this.checkincheckout = dates;
    if (dates) {
      console.log('dates are:', this.checkincheckout);
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
      this.newCheckIn = formattedCheckIn;
      this.newCheckout = formattedCheckOut;
      const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
      const numberOfDays = timeDifference / (1000 * 3600 * 24);
      this.numberOfNights = numberOfDays;
    } else {
      console.error('No room availability data found');
    }

    const hoteldatas = this.reflector.get(this.reflector.HOOKS.SELECTED_HOTELDETAILS);
    this.hoteldatas = hoteldatas 
    console.log("hotel datas",this.hoteldatas)
   
  }

  getStarArray(starRating: number): any[] {
    return new Array(starRating);
  }
getRoomsdata(){
  this.roomsdata =   this.reflector.get(this.reflector.HOOKS.ROOMS_PAYLOAD);
  console.log("rooms data is",   this.roomsdata)
  this.roomsAndPaxs = this.roomsdata.roomsinfo  
  if(this.roomsdata.roomsinfo)  {
    this.totalAdults = this.roomsAndPaxs.reduce((total, room) => total + room.paxs.adults, 0);
    this.totalChildrens = this.roomsAndPaxs.reduce((total, room) => total + room.paxs.childrens.length, 0);
  }

}
  ReserveProperty(data: any, room: any) {
    console.log("rate plan is", data);
    console.log("room is", room);
    this.reflector.set(this.reflector.HOOKS.ROOM_RATEPLAN_DATA, data);
    this.reflector.set(this.reflector.HOOKS.ROOMS_DETAILS, room.roomName);
    this.reflector.set(this.reflector.HOOKS.CANCELLATION_POLICY, room.cancellationPolicy);
  }

  calculateAdultChild() {
    let totalAdults = 0;
    let totalChildren = 0;
    this.roomsAndPaxs.forEach((room: any) => {
      totalAdults += room.paxs.adults;
      totalChildren += room.paxs.childrens.length;
    });
    console.log(`Total Adults: ${totalAdults}, Total Children: ${totalChildren}`);
    const totals = {
      totalAdults: totalAdults,
      totalChildren: totalChildren,
      totalRooms: this.roomsAndPaxs.length
    };
    localStorage.setItem('totalPaxs', JSON.stringify(totals));
  }

 

  calculateTotalPaxs() {
    this.totalAdults = this.roomsAndPaxs?.reduce(
      (currentTotal, item: PaxRooms) => {
        return currentTotal + item.paxs.adults;
      },
      0
    );
    this.totalChildrens = this.roomsAndPaxs?.reduce(
      (currentTotal, item: PaxRooms) => {
        return currentTotal + item.paxs.childrens.length;
      },
      0
    );
  }


  getPaxInfoForSearch() {
    let paxInfo = "";
    this.roomsAndPaxs.forEach((el) => {
      paxInfo += paxInfo ? "%7C%7C" : "";
      paxInfo += el.paxs.adults + "%7C" + el.paxs.childrens.length;
      el.paxs.childrens.forEach((child) => {
        paxInfo += "%7C" + child.age;
      });
    });
    return paxInfo;
  }
  getPaxInfo() {
    let paxInfo = "";
    this.roomsAndPaxs.forEach((el) => {
      paxInfo += paxInfo ? "||" : "";
      paxInfo += el.paxs.adults + "|" + el.paxs.childrens.length;
      el.paxs.childrens.forEach((child) => {
        paxInfo += "|" + child.age;
      });
    });
    return paxInfo;
  }
    search(){
      try {
        const params = {
          selectedDestination: this.selectedDestination,
          selectedStartDate: this.roomsdata.checkIn ,
          selectedEndDate: this.roomsdata.checkOut,
        };
    
        console.log('Parameters:', params);
    
        if (params.selectedDestination && params.selectedStartDate && params.selectedEndDate) {
          const paxInfo = this.getPaxInfoForSearch();
          this.isLoading = true;
          console.log('Making API call with:', {
            destination: params.selectedDestination,
            startDate: params.selectedStartDate,
            endDate: params.selectedEndDate,
            paxInfo,
          });
    
          this.api.SearchProperty(params.selectedDestination, params.selectedStartDate, params.selectedEndDate, paxInfo,).subscribe(
            (res) => {
              console.log('API response:', res);
              // this.propertyList = res.HotelDetails
             
             if(res.HotelDetails.length>0){
             
              const searchParams = {
                selectedStartDate: params.selectedStartDate,
                selectedEndDate: params.selectedEndDate,
                paxInfo: paxInfo,
                destination:params.selectedDestination
              };
              const paxdata = this.getPaxInfo();
              let payloaddata = {
                checkIn: params.selectedStartDate,
                checkOut: params.selectedEndDate,
                paxInfo: paxdata,
                selectedDestination:params.selectedDestination, //  
               roomsinfo:this.roomsAndPaxs
              };
            
              this.api.setSearchParams(searchParams); 
              console.log("params set are",searchParams)
              this.reflector.set(this.reflector.HOOKS.SELECTED_PROPERTY, res.HotelDetails);
              this.reflector.set(this.reflector.HOOKS.ROOMS_PAYLOAD, payloaddata);
              this.isLoading = false;
              this.router.navigate(['/search-results'])
              this.calculateAdultChild();
             }else{
              console.log("############ NO ROOMS PRESENT ######")
              this.isLoading = false;
             }
  
  
           
            },
            (error) => {
              if (error && error.message) {
                console.error('Error message:', error.message);
              }
              if (error && error.stack) {
                console.error('Error stack:', error.stack);
              }
              this.isLoading = false;
            }
          );
        } else {
          console.error('Missing required parameters:', params);
          this.isLoading = false;
        }
      } catch (e) {
        console.error('Unexpected error in search method:', e);
        this.isLoading = false;
      }
    }
  
  }  
