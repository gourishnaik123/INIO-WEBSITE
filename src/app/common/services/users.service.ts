import { EventEmitter, Injectable } from "@angular/core";
import { eSnackBar } from "../enum/enum";
import { URLConstants } from "../urls/URL.constant";
import { Reflector } from "./Reflector";
import { RestService } from "./rest.service";
import { Utils } from "./Utils";

@Injectable({
  providedIn: "root",
})
export class UserApi {
  loginError: EventEmitter<void> = new EventEmitter<void>();
    constructor(private rest: RestService, public reflect: Reflector<any>, private snackbar: Utils,) { }

    login(req: any, callBack: Function) {
        this.rest.makeJsonPostRequest(URLConstants().LOGIN, req).subscribe((loginRes) => {
              callBack(loginRes)
       ;
        }, err => {
            // this.snackbar.snackbar("Invalid email id or password", eSnackBar.success);
            this.loginError.emit(); 
        })
      }
}
