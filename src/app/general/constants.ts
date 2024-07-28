import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constants {

  constructor() { }

  static USER_DETAILS: {

    firstName: string,
    lastName: string,
    loginId: string,
    companyaccesskey: string,
    currency: {
      id: string,
      code: string,
      title: string,
    },
    role: {
      userType: string,
      roleName: string,
      usersModuleRoleAccess: {
        moduleName: string,
        userRoles: {
          readOnly: boolean,
          readWriteOnly: boolean,
          accessType: string
        }[]
      }[],
    },
    mobileNumber: string
    companyName: string
    key: string
    token: string
  }
  static AUTH_TOKEN = ""
  static vehiclesList = []

  static CHANGE_PASSWORD = "users/changepassword"
  static PARTNER_WITH_US = "users/partnerwithus"

  static SEARCH_CITY_URL = "geographic/getCityDetails/"
  static SEARCH_STATE_URL = "geographic/getstateDetails/"

  static INITIAL_SIGNUP_URL = "users/signup"
  static GET_ALL_COUNTRIES = "geographic/getAllCountries"
  static GET_ALL_MARKET_SEGMENTS = "geographic/getAllMarketSegment";
  static GET_TIMEZONE_BY_SEARCH = "geographic/getTimezoneDetails/"
  static GET_ALL_CURRENCIES = "users/getcurrencies"
  static USER_ACTIVATION_LINK_VERIFICATION = "users/activateLink/"
  static USER_ACTIVATION_URL = "users/activateUser"
  static VALIDATE_USERNAME_AVAILABILITY = "users/checkUser/"


  static GET_CURRENCIES_FOR_USER = "admin/getCurrencyDetails"
  static GET_ALL_STORES = "store/getsupplierdetails"
}

export class UserRoles {
  public static Roles = {
    TRIPLAZE: {
      SUPPLIER: "SUPPLIER",
      AGENT: "",
      SUPER_ADMIN: "SUPER.ADMIN",
      ADMIN: "",
    },
    EXTRANET: {

    }
  }

}
