import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";
import { RoomAvailabilityPayload } from "../models/booking.model";

@Injectable({
  providedIn: "root",
})
export class PropertyServices {
  private searchParams: any;
  private bookingData: any;
  constructor(private rest: RestService) {}

  /*-------- Get Methods -------*/
  fetchAllPropertiesUnderAChain() {
    return this.rest.makeAuthorizedGetRequest(URLConstants().EXT_PROPERTY.FETCH_ALL_PROPERTIES_UNDER_A_CHAIN)
  }

  /*-------- Post Methods -------*/
 
  SearchProperty(city:any,checkIn:any,checkOut:any,paxInfo:any):Observable<any>{
    return this.rest.makeGetRequest(URLConstants().SEARCH+city+"&checkIn="+checkIn+"&checkOut="+checkOut+"&paxInfo="+paxInfo+"&priceType=WEB")
    }

    setSearchParams(params: { selectedStartDate: any, selectedEndDate: any, paxInfo: any }) {
      this.searchParams = params;
    }
  
    getSearchParams() {
      return this.searchParams;
    }
    roomAvailability(payload: RoomAvailabilityPayload) {
      return this.rest.makePostRequestWithHeaders(URLConstants().EXT_PROPERTY.ROOM_AVAILABILITY, payload, {})
    }


    storeBookingData(data: any) {
      this.bookingData = data;
    }
  
    // Method to retrieve stored booking data
    getBookingData() {
      return this.bookingData;
    }
     
    createDirectBooking(payload: any) {
      return this.rest.makePostRequestWithHeaders(URLConstants().EXT_PROPERTY.BOOKING_DIRECT, payload, {})
    }

    // get hotel ammenities

    getAllhotel(){
      return this.rest.makeGetRequest(URLConstants().HOTEL_ROOM.GET_HOTEL_AMMENITIES)
    }

    // get room ammenities

    getAllroom(){
      return this.rest.makeGetRequest(URLConstants().HOTEL_ROOM.GET_ROOM_AMMENITIES)
    }
}
