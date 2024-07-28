import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import {
  Observable,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from "rxjs";
import { PropertyServices } from "src/app/common/api/property.api";
import {
  Destination,
  Property,
} from "src/app/common/models/destinations.model";

import { BookingRequestSavedParams, RoomAvailabilityCheckPayload, RoomAvailabilityPayload } from "src/app/common/models/booking.model";
import { Reflector } from "src/app/common/services/Reflector";
import { Router } from "@angular/router";
import { Service } from "src/app/common/models/services.model";
import { FeaturesService } from "src/app/common/api/features.api";
import { enumServiceTypes } from "src/app/common/enum/enum";
import { Utils } from "src/app/common/services/Utils";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import * as moment from "moment";
import { BookingService } from "src/app/common/api/booking.api";
import { PaxRooms } from "src/app/common/models/roompaxs.model";


@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.css"],
})
export class DefaultComponent implements OnInit {
  destinationsList: Destination[] = [];
  //searchData:any
  @Input() searchData: any; 
  filteredProperty: Property[] = [];
  selectedDestination: Destination = {} as Destination;
  searchTerm = new FormControl("");
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;
  subscription4: Subscription | undefined;
  showDef:boolean = false;
  showmain:boolean = true;

  bookingRequestSavedParams: BookingRequestSavedParams =
    {} as BookingRequestSavedParams;
  productId: string | null = "";
  subscription: Subscription | undefined;
  servicesList: Service[] = [];
 selectedPropertyDetails:any;
 isSearch:boolean=true;
 destinationOptions:any[]=[];

  constructor(
    private api: PropertyServices,
    private dialog: MatDialog,
    private propertyReflector: Reflector<Property>,
    private savedParamsReflector: Reflector<BookingRequestSavedParams>,
    private router: Router,
    private destinationReflector: Reflector<Destination>,
    private api1: FeaturesService,
    private utils: Utils,
    public reflect: Reflector<any>,
    private api2: BookingService,
  ) { }
 
  userBasicDetails: any;
walletBalance:any;
selectedValue: string = 'None';
  options: string[] = ['None', 'India', 'Australia', 'Bangladesh', 'Belgium', 'Egypt', 'France', 'Malaysia', 'United Arab Emirates'];
  ngOnInit(): void {
  }
  logout() {
    this.reflect.set(this.reflect.HOOKS.AUTH_TOKEN, undefined)
    this.router.navigateByUrl('/');
    console.log(this.router)

  }
}