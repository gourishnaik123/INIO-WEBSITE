import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";
import { BanquetCardComponent } from "src/app/sub-projects/hotels/shared/components/banquet-card/banquet-card.component";

@Injectable({
  providedIn: "root",
})
export class BanquetServices {

  constructor(private rest: RestService) {}

  /*-------- Get Methods -------*/
  public Banquet_hall(): Observable<any> {
    return this.rest.makeGetRequestWithoutJWT(URLConstants() .BANQUET_CARD.Banquet_hall)
  }
}