import { Destination, Property } from "./destinations.model";
import { PaxRooms } from "./roompaxs.model";
import { DayRoomCheckInBreakup, Rooms } from "./rooms.model";
import { ProductServices, Service } from "./services.model";

export interface BookingRequestSavedParams {
  userVerification?: UserVerification;
  selectedProperty?: Property;
  selectedService?: Service;
  selectedRooms?: Rooms[];
  selectedProductServices?: ProductServices[];
  selectedHoursPack?: DayRoomCheckInBreakup;
  currency?: string;
  destinationName?: string;
  destinationState?: string;
  destinationCountry?: string;
  chainName?: string;
  checkInDate?: string;
  checkOutDate?: string;
  roomsAndPaxs?: PaxRooms[];
  noOfAdults?: number;
  noOfChildrens?: number;
  hotelName?: string;
  hotelId?: number;
  selectedOneRoomCheckInSlot?: string;
}

export class UserVerification {
  verificationCompleted: boolean;
  verifiedMobileNumber: string;
  verifiedEmailId: string;

  constructor() {
    this.verificationCompleted = false;
    this.verifiedMobileNumber = "";
    this.verifiedEmailId = "";
  }
}

export class RoomAvailabilityPayload {
  checkIn: string | undefined;
  checkOut: string | undefined;
  productId: string | undefined;
  roomId?: number | undefined;
  ratePlanId?: number | undefined;
  paxInfo: string | undefined;

  constructor() {
    this.checkIn = "";
    this.checkOut = "";
    this.productId = "";
    this.roomId = 0;
    this.ratePlanId = 0;
    this.paxInfo = "";
  }
}
export class RoomAvailabilityCheckPayload {
  checkIn: string | undefined;
  checkOut: string | undefined;
  productId: string | undefined;
  roomId?: number | undefined;
  ratePlanId?: number | undefined;
  paxInfo: string | undefined;
  nationality:string | undefined;
  constructor() {
    this.checkIn = "";
    this.checkOut = "";
    this.productId = "";
    this.roomId = 0;
    this.ratePlanId = 0;
    this.paxInfo = "";
    this.nationality="";
  }
}


export class saveDayBookingPayload {
  date: string;
  hoursPack: string;
  oneDayRoomServiceId: string;
  isCancelled: string;
  checkinTime: string;
  roomId: string | undefined;
  productId: number | undefined;
  amount: string;
  tax: string;
  fname: string;
  lname: string;
  mobileNumber: string;
  emailId: string;

  constructor() {
    this.date = "";
    this.hoursPack = "";
    this.oneDayRoomServiceId = "";
    this.isCancelled = "";
    this.checkinTime = "";
    this.amount = "";
    this.tax = "";
    this.fname = "";
    this.lname = "";
    this.mobileNumber = "";
    this.emailId = "";
  }
}
