import { Injectable } from "@angular/core";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";
import { RoomAvailabilityPayload, saveDayBookingPayload } from "../models/booking.model";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: "root",
})
export class BookingService {
  private roomAvailabilityData = new BehaviorSubject<any>(null);
  roomAvailabilityData$ = this.roomAvailabilityData.asObservable();
  constructor(private rest: RestService) { }

  /*-------- STAY --------*/
  fetchAddonServicesForProperty(productId: number | undefined,checkInDate:any,checkOutDate:any) {
    return this.rest.makeAuthorizedGetRequest(URLConstants().EXT_PROPERTY.FETCH_ADD_ON_SERVICES_FOR_PROPERTY +  productId + '/' +checkInDate + '/'+checkOutDate)
  }

  roomAvailability(payload: RoomAvailabilityPayload) {
    return this.rest.makePostRequestWithHeaders(URLConstants().EXT_PROPERTY.ROOM_AVAILABILITY, payload, {})
  }

  createDirectBooking(payload: any) {
    return this.rest.makePostRequestWithHeaders(URLConstants().EXT_PROPERTY.BOOKING_DIRECT, payload, {})
  }

  fetchQuotes(payload: any) {
    return this.rest.makePostRequestWithHeaders(URLConstants().QUOTATIONS.GET_ALL_QUOTATION, payload, {})
  }

  /*-------- DAY USE --------*/
  fetchOneDayRoomDetailsByDateAndProductId(selectedDate: string, productId: number) {
    return this.rest.makeAuthorizedGetRequest(URLConstants().ONE_DAY_ROOM.ONE_DAY_ROOM_DETAILS_BY_RATE_AND_PRODUCT_ID + `selectedDate=${selectedDate}&productId=${productId}`)
  }

  saveDayBooking(payload: saveDayBookingPayload) {
    return this.rest.makePostRequestWithHeaders(URLConstants().ONE_DAY_ROOM.SAVE_DAY_BOOKING, payload, {})
  }

  calculateTimeSlot(payload: { startDate: string, hrsPack: string, oneDayRoomId: number }) {
    return this.rest.makePostRequestWithHeaders(URLConstants().ONE_DAY_ROOM.CALCULATE_TIME_SLOT, payload, {})
  }
  /*-------- FETCH ALL PROPERTIES --------*/
  fetchAllproperties(hotelid: any) {
    return this.rest.makeAuthorizedGetRequest(URLConstants().FETCH_ALLPROPERTIES.ALL_PROPERTIES + hotelid)
  }

  ApplyPromoCode(payload: { agentEmailId: string, couponCode: string, roomRateKey: number }) {
    const agentEmailId = payload.agentEmailId;
    return this.rest.makePostRequestWithagent(
      URLConstants().PROMOCODE.APPLY_PROMO,
      payload,
      agentEmailId
    );
  }
  
  updateRoomAvailabilityData(data: any) {
    console.log(data,"anyyyy");
    
    this.roomAvailabilityData.next(data);
  }


}


