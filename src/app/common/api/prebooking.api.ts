import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";

@Injectable({
  providedIn: "root",
})
export class PreBookingService {

  constructor(private rest: RestService) {}

  /*-------- Get Methods -------*/
  public getSessionDetails(): Observable<any> {
    return this.rest.makeGetRequestWithoutJWT(URLConstants().PRE_BOOKING.SESSION_DETAILS)
  }


/*-------- Post Methods -------*/
  public bookTable(payload: any): Observable<any> {
    return this.rest.makeJsonPostRequest(URLConstants().PRE_BOOKING.BOOK_TABLE, payload)
  }

}
