import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedPref {

  COMPANY_DETAILS: string = "COMPANY_DETAILS"
  AUTH_TOKEN: string = "AUTH_TOKEN";
  ON_TAB_CHANGE_IN_BOOKINGS = "ON_TAB_CHANGE_IN_BOOKINGS";
  USER_ACCESS_CONTROL="USER_ACCESS_CONTROL"
  PRODUCT_ID="PRODUCT_ID"
}