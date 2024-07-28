import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "src/app/common/services/rest.service";
import { URLConstants } from "src/app/common/urls/URL.constant";

@Injectable({
  providedIn: "root",
})
export class CelebrationServices {

  constructor(private rest: RestService) {}

  /*-------- Get Methods -------*/
  public Celebration(): Observable<any> {
    return this.rest.makeGetRequestWithoutJWT(URLConstants().CELEBRATION_CARD.Celebration)
  }

}