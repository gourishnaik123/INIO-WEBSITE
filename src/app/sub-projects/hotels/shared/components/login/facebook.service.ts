import { Injectable } from '@angular/core';

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}

declare const FB: any;

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() { 
    this.loadFacebookSDK();
  }

  private loadFacebookSDK() {
    ((d: Document, s: string, id: string) => {
      let js: HTMLScriptElement, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s) as HTMLScriptElement; // Explicitly declare js as HTMLScriptElement
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      if (fjs && fjs.parentNode) { 
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');

    window.fbAsyncInit = () => {
      FB.init({
        appId      : '357444690312614', 
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
      });
    };
  }

  public loginWithFacebook() {
    return new Promise((resolve, reject) => {
      FB.login((response: any) => {
        if (response.authResponse) {
          resolve(response);
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'email'});
    });
  }

  public getProfile() {
    return new Promise((resolve, reject) => {
      FB.api('/me', {fields: 'last_name, first_name, email,picture'}, (response: any) => {
        if (!response || response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  }

  public logout() {
    return new Promise((resolve) => {
      FB.logout((response: any) => {
        resolve(response);
      });
    });
  }
}
