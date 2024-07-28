import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";

@Injectable({
  providedIn: "root",
})
export class QuoatationServices {

  constructor(private rest: RestService) { }

  // public fetchAllQuotationByDate(startDate: any, endDate: any): Observable<any> {

  //   return this.rest.makeAuthorizedGetRequest(URLConstants().QUOTATIONS.GET_ALL_QUOTATION_BY_DATE + startDate + '/' + endDate)
  // }
  public fetchAllQuotation() {
    return this.rest.makeAuthorizedGetRequest(URLConstants().QUOTATIONS.GET_ALL_QUOTATION)
  }

  public fetchQuotationByQuotationId(id: any): Observable<any> {
    return this.rest.makeAuthorizedGetRequest(URLConstants().QUOTATIONS.FETCH_QUOTATION_BY_QUOTATIONID + id)
  }
  public confirmBookingByQuotationId(id: any): Observable<any> {
    return this.rest.makeAuthorizedGetRequest(URLConstants().QUOTATIONS.CONFIRM_BOOKING_BY_QUOTATION + id)
  }
}
