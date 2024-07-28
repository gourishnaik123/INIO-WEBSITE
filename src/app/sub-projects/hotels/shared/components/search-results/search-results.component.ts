import { Component, Input, OnInit } from '@angular/core';
import { Reflector } from 'src/app/common/services/Reflector';
import { MatDialog } from '@angular/material/dialog';
import { DateandpaxPopupComponent } from '../dateandpax-popup/dateandpax-popup.component';
import { PaxPopupComponent } from '../pax-popup/pax-popup.component';
import { PropertyServices } from 'src/app/common/api/property.api';
import { PaxRooms } from "src/app/common/models/roompaxs.model";
import { Property } from 'src/app/common/models/destinations.model';
import {
  BookingRequestSavedParams,
  RoomAvailabilityPayload,
} from "src/app/common/models/booking.model";
import { Router } from '@angular/router';
import { SearchFilterPopupComponent } from '../search-filter-popup/search-filter-popup.component';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  filterbox:boolean = false;
  userDetails: any;
  firstname: any;
  lastname: any;
  photo: any;
  searchParams: any;
  selectedStartDate: string = "";
  selectedEndDate: string = "";
  checkInDate: Date | any;
  checkOutDate: Date | any;
  destinationName:any;
  selectedNationality!:'';
  destinationOptions: {destinationName: string}[] = [];
  showText: boolean = true;
  selectedDestination: string | null = null; 
  totalAdults: number = 2;
  totalChildrens: number = 0;
  bookingRequestSavedParams: BookingRequestSavedParams =
  {} as BookingRequestSavedParams;
  initialHotelcount = 4;
  showMoreFacility = false;
  initialRoomcount = 4;
  showMoreRooms =false;
  starRatings: string[] = ['2 star', '3 star', '4 star', '5 star'];
  @Input() propertyList: any[] = []
  roomsAndPaxs: PaxRooms[] = [
    { roomId: 0, roomName: "", paxs: { adults: 2, childrens: [] } },
  ];
  
  isLoading: boolean = false;

  hotels = [
    {
      name: 'Samann Grand',
      rating: 4.9,
      location: 'Male, Maldives',
      price: 1700,
      originalPrice: 1890,
      currency: 'LKR'
    },
   
  ];
  transformedDestination: any;
  facilitity: any;
  Allrooms: any;
  roomsdata: any;
  constructor(private reflector: Reflector<any>,public dialog: MatDialog,private api:PropertyServices, private savedParamsReflector: Reflector<BookingRequestSavedParams>,private router:Router) {
    for (let i = 1; i < 18; i++) {
      this.hotels.push({ ...this.hotels[0] });
    }
   }

  ngOnInit(): void {
    this. getGoogleCredentials();
    this.getPropertyList();
   
    this.getParams();
    this.getAllhotelammenities();
    this.getAllroom();
    this.getRoomsdata();
    this.getAllDestinations();
  }

getPropertyList(){
  this.propertyList = this.reflector.get(this.reflector.HOOKS.SELECTED_PROPERTY) || [];
  console.log('Reflector data is:', this.propertyList);
}
  getParams(){
    this.searchParams = this.api.getSearchParams();
    console.log('Retrieved search parameters ############:', this.searchParams);

    if (!this.searchParams) {
      this.router.navigate(['/']);
    }

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

  filtertoggle(){
    this.filterbox = !this.filterbox;
 
  }

  getAllDestinations() {
    this.api.fetchAllPropertiesUnderAChain().subscribe((res: any[]) => {
      this.showText = false;
      this.destinationOptions = res.map((element: any) => ({
        destinationName: element.destinationName
      }));
    
      
      this.selectedDestination = this.roomsdata.selectedDestination;
      console.log(this.selectedDestination)
    
    });
  }
  getPaxInfoForSearch(){
    
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

  // date pax dialogue
  datepaxdialogue(){
    const dialogRef = this.dialog.open(DateandpaxPopupComponent, {
      width: '651px',
      height:'auto',
      data: {
        checkInDate:  this.roomsdata.checkIn, 
        checkOutDate: this.roomsdata.checkOut
      }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Selected Date:', result);
      if(result){
        this.roomsdata.checkIn = result.checkInDate;
        this.roomsdata.checkOut = result.checkOutDate;
      }
    
    });
  }


  // pax popup
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


        const paxdata = this.getPaxInfo();
        let payloaddata = {
          checkIn: params.selectedStartDate,
          checkOut: params.selectedEndDate,
          paxInfo: paxdata,
          roomsinfo:this.roomsAndPaxs
        };
  
        this.api.SearchProperty(params.selectedDestination, params.selectedStartDate, params.selectedEndDate, paxInfo,).subscribe(
          (res) => {
            console.log('API response:', res);
            this.propertyList = res.HotelDetails
           
           if(res.HotelDetails.length>0){
           
            const searchParams = {
              selectedStartDate: params.selectedStartDate,
              selectedEndDate: params.selectedEndDate,
              paxInfo: paxInfo,
              destination:params.selectedDestination
            };
          
            this.api.setSearchParams(searchParams); 
            this.getParams()
            this.reflector.set(this.reflector.HOOKS.SELECTED_PROPERTY, res.HotelDetails);
            this.reflector.set(this.reflector.HOOKS.ROOMS_PAYLOAD, payloaddata);
            this.calculateAdultChild();
            this.getRoomsdata();
            this.isLoading = false;
           }else{
            console.log("############ NO ROOMS PRESENT ######");
            this.isLoading = false;

           }


         
          },
          (error) => {
            this.isLoading = false;

            if (error && error.message) {
              console.error('Error message:', error.message);
            }
            if (error && error.stack) {
              console.error('Error stack:', error.stack);
            }
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

  getAllhotelammenities(){
    this.api.getAllhotel().subscribe((res=>{
      // console.log('hotel are',res.amenities[0].categoryAmenities)
      this.facilitity = res.amenities[0].categoryAmenities
    }))
  }

 


  get visibleFacilities() {
    return this.showMoreFacility ? this.facilitity : this.facilitity?.slice(0, this.initialHotelcount);
  }

  toggleShowMore() {
    this.showMoreFacility = !this.showMoreFacility;
  }


  getAllroom(){
    this.api.getAllroom().subscribe((res=>{
      console.log(res)
      this.Allrooms = res
    }))
  }

  get roomsList() {
    return this.showMoreRooms ? this.Allrooms : this.Allrooms?.slice(0, this.initialRoomcount);
  }
  toggleShowMoreRooms() {
    this.showMoreRooms = !this.showMoreRooms;
  }

// filter popup

filterPopup() {
  const dialogRef = this.dialog.open(SearchFilterPopupComponent, {
    width: '800px',
    height: '750px',
    data: {
      facilitity: this.facilitity,
      Allrooms: this.Allrooms,
      starRatings: this.starRatings
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log('Selected Date:', result);
  });
}

 




  // ##### ROOM AVAILABLITY API ////
  roomAvailblity(hotelid:any,hotel:any) {
    const paxInfo = this.getPaxInfo();
    let payload: RoomAvailabilityPayload = {
      checkIn: this.searchParams.selectedStartDate,
      checkOut: this.searchParams.selectedEndDate,
      productId: hotelid,
      paxInfo: this.roomsdata.paxInfo,
      
    };
//  selectedDestination: this.selectedDestination,

let paxdata={
  checkIn: this.searchParams.selectedStartDate,
  checkOut: this.searchParams.selectedEndDate,
  productId: hotelid,
  paxInfo: this.roomsdata.paxInfo,
  selectedDestination: this.selectedDestination,
  roomsinfo:this.roomsAndPaxs
}
    console.log('Payload:', payload); 
    if(payload){
      this.isLoading = true;
    }

   

    this.api.roomAvailability(payload).subscribe(
      (res: any) => {
        console.log('API Response:', res); 
        if (res?.hotelDetails.length > 0) {
          this.reflector.set(this.reflector.HOOKS.ROOM_AVAILABILITY_DATA, res);
          this.reflector.set(this.reflector.HOOKS.ROOMS_PAYLOAD, paxdata);
          this.reflector.set(this.reflector.HOOKS.SELECTED_HOTELDETAILS, hotel.propertyDetail);
          this.isLoading = false;
          this.router.navigate(["/property-details"])
          console.log("hotel is",hotel.propertyDetail)
          // this.router.navigate(["hotels/" + event.propertyDetail.productId + "/bookings/Stay/"]);
        } else {
          console.error('No rooms available');
          this.isLoading = false;
        }
      },
      (err: any) => {
        console.error('API Error:', err); 
        this.isLoading = false;
       
      }
    );
  }
   }
  
  

