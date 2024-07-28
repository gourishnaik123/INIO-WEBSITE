import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../login/facebook.service';
import { MatDialog } from '@angular/material/dialog';
import { DateandpaxPopupComponent } from '../dateandpax-popup/dateandpax-popup.component';
import { PaxPopupComponent } from '../pax-popup/pax-popup.component';
import { PaxRooms } from "src/app/common/models/roompaxs.model";
import * as moment from "moment";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { PropertyServices } from 'src/app/common/api/property.api';
import { Destination } from 'src/app/common/models/destinations.model';
import { Router } from '@angular/router';
import { Reflector } from "src/app/common/services/Reflector";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  roomsAndPaxs: PaxRooms[] = [
    { roomId: 0, roomName: "", paxs: { adults: 2, childrens: [] } },
  ];
  isLoading: boolean = false;
  totalAdults: number = 2;
  totalChildrens: number = 0;
  selectedDestination: string | null = null; 
  Destination: Destination = {} as Destination;
  // selectedDestination: Destination = {} as Destination;
  // destinationsList: Destination[] = [];
  // selectedService?: Service = {} as Service;
  selectedStartDate: string = "";
  selectedEndDate: string = "";
  checkInDate: Date | any;
  checkOutDate: Date | any;
  destinationName:any;
  selectedNationality!:'';
  destinationOptions: {destinationName: string}[] = [];
  showText: boolean = true;
  date:any
  // enumServiceTypes = enumServiceTypes;
  // currentDate = new Date();
  constructor(private fb: FacebookService,public dialog: MatDialog,  private api: PropertyServices,private router:Router,private reflector:Reflector<any>) { }
  cars = [
    {
      name: 'BMW 530e xDrive',
      rating: 4.9,
      type: 'Sedan . 2023',
      price: 1700,
      currency: 'LKR',
      amenities: [
        { icon: 'fa-chair', text: '5 Seater' },
        { icon: 'fa-fan', text: 'Air Condition' },
        { icon: 'fa-snowman', text: 'Air Suspension' },
      ]
    },
    {
      name: 'BMW 530e xDrive',
      rating: 4.9,
      type: 'Sedan . 2023',
      price: 1700,
      currency: 'LKR',
      amenities: [
        { icon: 'fa-chair', text: '5 Seater' },
        { icon: 'fa-fan', text: 'Air Condition' },
        { icon: 'fa-snowman', text: 'Air Suspension' },
      ]
    },
    {
      name: 'BMW 530e xDrive',
      rating: 4.9,
      type: 'Sedan . 2023',
      price: 1700,
      currency: 'LKR',
      amenities: [
        { icon: 'fa-chair', text: '5 Seater' },
        { icon: 'fa-fan', text: 'Air Condition' },
        { icon: 'fa-snowman', text: 'Air Suspension' },
      ]
    },
    {
      name: 'BMW 530e xDrive',
      rating: 4.9,
      type: 'Sedan . 2023',
      price: 1700,
      currency: 'LKR',
      amenities: [
        { icon: 'fa-chair', text: '5 Seater' },
        { icon: 'fa-fan', text: 'Air Condition' },
        { icon: 'fa-snowman', text: 'Air Suspension' },
      ]
    }
    // Add more car objects as needed
  ];


  // nomads rendering
  cards = [
    {
      nomadsBasicTitle: 'Nomads Basic',
      nomadsPre: 'Sim card / eSim / Dongle / Pocket router',
      maxUploadSpeed: 'Maximum upload speed',
      maxDownloadSpeed: 'Maximum download speed',
      dayTimeData: '30Gb Day time',
      nightTimeData: '15Gb Night time',
      unlimitedVoice: 'Any network unlimited voice',
      unlimitedSMS: 'Any network unlimited SMS',
      lorusText: 'Lorem Ipsum is dummy text Lorem Ipsum is simply dummy text',
      price: '1,700 LKR',
      pricePeriod: '/ Month'
    },
    {
      nomadsBasicTitle: 'Nomads Plus',
      nomadsPre: 'Sim card / eSim / Dongle / Pocket router',
      maxUploadSpeed: 'Faster upload speed',
      maxDownloadSpeed: 'Faster download speed',
      dayTimeData: '50Gb Day time',
      nightTimeData: '25Gb Night time',
      unlimitedVoice: 'Any network unlimited voice',
      unlimitedSMS: 'Any network unlimited SMS',
      lorusText: 'Lorem Ipsum is dummy text Lorem Ipsum is simply dummy text',
      price: '2,500 LKR',
      pricePeriod: '/ Month'
    },
    {
      nomadsBasicTitle: 'Nomads Premium',
      nomadsPre: 'Sim card / eSim / Dongle / Pocket router',
      maxUploadSpeed: 'Fastest upload speed',
      maxDownloadSpeed: 'Fastest download speed',
      dayTimeData: '100Gb Day time',
      nightTimeData: '50Gb Night time',
      unlimitedVoice: 'Any network unlimited voice',
      unlimitedSMS: 'Any network unlimited SMS',
      lorusText: 'Lorem Ipsum is dummy text Lorem Ipsum is simply dummy text',
      price: '5,000 LKR',
      pricePeriod: '/ Month'
    }
  ];
  items: { name: string, location: string, price: string }[] = [
    { name: 'sanam grand', location: 'Male, Maldives', price: '1,700' },//
    { name: 'sanam grand', location: 'Male, Maldives', price: '2,000' },
    { name: 'sanam grand', location: 'Male, Maldives', price: '3,000' },
    { name: 'sanam grand', location: 'Male, Maldives', price: '4,000' }
    // Add more items as needed
  ];
  ngOnInit(): void {
    this.OnloadRemoveLocalstorageCredentials();
    // this.getAllDestinations();
  }
  OnloadRemoveLocalstorageCredentials(){
    localStorage.removeItem('tokenPayload');
    localStorage.removeItem('facebooktoken');
  localStorage.removeItem('reflectStore');
  localStorage.removeItem('userData');
    // this.fb.logout();
  }




  // date pax dialogue
  datepaxdialogue(){
    const dialogRef = this.dialog.open(DateandpaxPopupComponent, {
      width: '651px',
      height:'auto',
      data: {
        checkInDate: this.checkInDate, 
        checkOutDate: this.checkOutDate
      }
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Selected Date:', result);

      if(result){
        this.checkInDate = result.checkInDate;
        this.checkOutDate = result.checkOutDate;
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
    
  getAllDestinations() {
    this.api.fetchAllPropertiesUnderAChain().subscribe((res: any[]) => {
      this.showText = false;
      this.destinationOptions = res.map((element: any) => ({
        destinationName: element.destinationName
      }));
      if (this.destinationOptions.length > 0) {
        this.selectedDestination = this.destinationOptions[0].destinationName;
      }
      
      console.log(this.destinationOptions);
    });
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

  search() {
    try {
  
  
  
      const params = {
        selectedDestination: this.selectedDestination,
        selectedStartDate: this.checkInDate,
        selectedEndDate: this.checkOutDate,
      };
  
      console.log('Parameters:', params);
    
      if (params.selectedDestination && params.selectedStartDate && params.selectedEndDate) {
        const paxInfo = this.getPaxInfoForSearch();
        this.isLoading =true;
        console.log('Making API call with:', {
          destination: params.selectedDestination,
          startDate: params.selectedStartDate,
          endDate: params.selectedEndDate,
          paxInfo,
        });
  
        this.api.SearchProperty(params.selectedDestination, params.selectedStartDate, params.selectedEndDate, paxInfo,).subscribe(
          (res) => {
            console.log('API response:', res);
            
           if(res.HotelDetails.length>0){
            this.router.navigate(['/search-results'])
            const searchParams = {
              selectedStartDate: params.selectedStartDate,
              selectedEndDate: params.selectedEndDate,
              paxInfo: paxInfo,
              destination:params.selectedDestination
            };

            const paxdata = this.getPaxInfo();
            let payload = {
              checkIn: params.selectedStartDate,
              checkOut: params.selectedEndDate,
              paxInfo: paxdata,
              selectedDestination:params.selectedDestination,
              roomsinfo:this.roomsAndPaxs
            };
        
            this.api.setSearchParams(searchParams); 
            this.reflector.set(this.reflector.HOOKS.SELECTED_PROPERTY, res.HotelDetails);
            this.reflector.set(this.reflector.HOOKS.ROOMS_PAYLOAD, payload);
            this.calculateAdultChild();
            this.isLoading = false;
           }else{
            console.log("############ NO ROOMS PRESENT ######");
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
          }
        );
      } else {
        console.error('Missing required parameters:', params);
      }
    } catch (e) {
      console.error('Unexpected error in search method:', e);
    }
  }
  

  
}