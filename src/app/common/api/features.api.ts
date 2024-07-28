import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";

@Injectable({
  providedIn: "root",
})
export class FeaturesService {

  constructor(private rest: RestService) {}

  /*-------- Get Methods -------*/
  fetchAllAvailableServiceForProperty(productId: string | null) {
    return this.rest.makeAuthorizedGetRequest(URLConstants().EXT_PROPERTY.FETCH_AVAILABLE_SERVICE_FOR_PROPERTY + productId)
  }

  fetchWalletBalance(emailId:any):Observable<any>{
    return this.rest.makeAuthorizedJwtGetRequest(URLConstants().WALLET.GET_WALLET_BALANCE+'?agentEmailId='+emailId)
  }
  /*-------- Post Methods -------*/
SearchProperty(city:any,checkIn:any,checkOut:any,paxInfo:any,natinonality:any):Observable<any>{
return this.rest.makeAuthorizedJwtGetRequest(URLConstants().SEARCH+city+"&checkIn="+checkIn+"&checkOut="+checkOut+"&paxInfo="+paxInfo+"&priceType=WEB"+"&nationality="+natinonality)
}
}
