import { Injectable } from '@angular/core';
import { URLConstants } from 'src/app/core/URLConstants';
import { ExtranetRestService } from '../services/extranet-rest.service';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ReservationReport {
  constructor(private rest: ExtranetRestService) { }

  public getNewBookingReport(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + "&bookingId=&promoCode=&reportType=1&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=new&pageno=1")
  }
  public getAllBookingReport(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + "&bookingId=&promoCode=&reportType=1&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=filtered&pageno=1")
  }
  public getUpcomingBookingReport(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + "&bookingId=&promoCode=&reportType=&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=upcoming&pageno=1")
  }
  public getPastBookingReport(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + "&bookingId=&promoCode=&reportType=&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=past&pageno=1")
  }
  public cancelledBookingReport(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + "&bookingId=&promoCode=&reportType=&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=cancelled&pageno=1")
  }
  public allBookingReport(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + "&bookingId=&promoCode=&reportType=&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=all&pageno=1")
  }
  public searchBooking(productId: string, bookingId: string, promoCode: string, reportType: string, startDate: string, endDate: string, status: string, paymentMode: string, rateplanId: string, roomId: string): Observable<any> {
    let url = ""
    if (bookingId) { url += "&bookingId=" + bookingId }
    if (promoCode) { url += "&promoCode=" + promoCode }
    let URL = ""
    if (status) { URL += "&status=" + status }
    if (startDate) { URL += "&startDate=" + startDate }
    if (endDate) { URL += "&endDate=" + endDate }
    if (paymentMode) { URL += "&paymentMode=" + paymentMode }
    if (rateplanId) { URL += "&rateplanId=" + rateplanId }
    if (roomId) { URL += "&roomId=" + roomId }
    console.log(URL, "url")
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + url + "&reportType=" + reportType + URL + "&bookingFilter=filtered&pageno=1")
  }

  //Reservation Booking
  public getAllReservation(productId: string): Observable<any> {
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_RESERVATION_REPORT + "?userId=1848&productId=" + productId + "&bookingId=&promoCode=&reportType=1&startDate=&endDate=&status=&paymentMode=&rateplanId=&roomId=&bookingFilter=filtered&allProps=false&pageno=1")
  }
  public searchReservationBooking(productId: string, bookingId: string, promoCode: string, reportType: string, startDate: string, endDate: string, status: string, paymentMode: string, rateplanId: string, roomId: string): Observable<any> {
    let url = ""
    if (bookingId) { url += "&bookingId=" + bookingId }
    if (promoCode) { url += "&promoCode=" + promoCode }
    let URL = ""
    if (status) { URL += "&status=" + status }
    if (startDate) { URL += "&startDate=" + startDate }
    if (endDate) { URL += "&endDate=" + endDate }
    if (paymentMode) { URL += "&paymentMode=" + paymentMode }
    if (rateplanId) { URL += "&rateplanId=" + rateplanId }
    if (roomId) { URL += "&roomId=" + roomId }
    console.log(url, "url")
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_RESERVATION_REPORT + "?userId=1848&productId=" + productId + url + "&reportType=" + reportType + URL + "&bookingFilter=filtered&allProps=false&pageno=1")
  }

  public cancelBooking(bookingId: any, callback: (arg0: any) => void) {
    return this.rest.makeJsonPostRequest(URLConstants.EXTRANET.REPORTS.CANCEL_BOOKING, {
      "bookingId": bookingId,
      "cancellationReason": ""
    }).subscribe(res => {
      callback(res);
    })
  }
  public searchDashboardReports(productIds: string, bookingId: string, reportType: string | number, startDate: string, endDate: string, status: string,vendorId: string,isMonthly: string | boolean,monthYear: string): Observable<any> {
    let url = ""
    if (bookingId) { url += "&bookingId=" + bookingId }
    // if (promoCode) { url += "&promoCode=" + promoCode }
    let URL = ""
    if (status) { URL += "&status=" + status }
    if (startDate) { URL += "&startDate=" + startDate }
    if (endDate) { URL += "&endDate=" + endDate }
    // if (paymentMode) { URL += "&paymentMode=" + paymentMode }
    // if (rateplanId) { URL += "&rateplanId=" + rateplanId }
    if (monthYear) { URL += "&monthYear=" + monthYear }
    if (vendorId) { URL += "&vendorId=" + vendorId }

    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productIds + url + "&reportType=" + reportType + URL + "&bookingFilter=Filtred&pageno=1&isMonthly="+isMonthly)
  }
  public getUpcomingBookingReportDashboard(productId: string,bookingId: string,promoCode: string,startDate: string,endDate: string,status: string,paymentMode: string,rateplanId: string,roomId: string): Observable<any> {
    let url = ""
    if (bookingId) { url += "&bookingId=" + bookingId }
    if (promoCode) { url += "&promoCode=" + promoCode }
    let URL = ""
    if (status) { URL += "&status=" + status }
    if (startDate) { URL += "&startDate=" + startDate }
    if (endDate) { URL += "&endDate=" + endDate }
    if (paymentMode) { URL += "&paymentMode=" + paymentMode }
    if (rateplanId) { URL += "&rateplanId=" + rateplanId }
    if (roomId) { URL += "&roomId=" + roomId }
    return this.rest.makeGetRequest(URLConstants.EXTRANET.REPORTS.GET_ALL_BOOKING_REPORT + "?userId=1848&productIds=" + productId + URL+"&bookingFilter=upcoming&pageno=1")
  }
}