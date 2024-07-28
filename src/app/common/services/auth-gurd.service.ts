import { Injectable } from "@angular/core";
import { Reflector } from "./Reflector";
import {  Observable, Subject } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard {
   public static onLoginStatusChanged = new Subject<boolean>();
   private static googlefbaccess = false;
    constructor(private router: Router,public reflect: Reflector<any>,){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let authDetails = this.reflect.get(this.reflect.HOOKS.AUTH_TOKEN);
      let userDetails = this.reflect.get(this.reflect.HOOKS.USER_DETAILS);
    
      // Check if the user is authenticated via Google login
      if (AuthGuard.googlefbaccess) {
        return true;
      }
    
      // Check if authentication details or user details are missing
      if (authDetails == undefined || userDetails == undefined) {
        // Redirect to the root URL
        this.router.navigateByUrl('/');
        return false;
      } else {
        return true;
      }
    }
    
      static setLogin(token:any, data:any) {
        localStorage.setItem("c_b_atk_83796543746", token);    
        localStorage.setItem("c_a_s_83796543746", JSON.stringify(data));
        localStorage.setItem("userData", JSON.stringify(data));
        let dt = new Date()
        let expiry = dt.getTime() + 21600000
        localStorage.setItem("trex_38475436573837456374", expiry.toString());
       this.onLoginStatusChanged.next(true);
      }

      static googleloginFb(){
     AuthGuard.googlefbaccess = true;

      }
    
  }

