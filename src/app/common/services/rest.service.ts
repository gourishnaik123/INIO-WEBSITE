import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Reflector } from './Reflector';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers = new HttpHeaders();

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, public tokenReflect: Reflector<string>,private roter:Router) { }

  public makeAuthorizedPostRequest(url: string, payload: any): Observable<any> {
    return this.http
      .post(url, payload, { headers: this.headers.set('Authorization', 'Bearer ' + this.tokenReflect.get(this.tokenReflect.HOOKS.AUTH_TOKEN)) }).pipe(tap(_ => console.log("request completed")),
        catchError(err => {
          return throwError(err);
        }));
  }

  public makeAuthorizedGetRequest(url: any): Observable<any> {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set('jwt', 'ELIV32yf41aRt43aE182t89a27624dbe8d62Thy64e5c345da56d3f325c3ac58dd34rT').set('clientReference', 'elivator') }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  // public makeAuthorizedGetRequest2(url: any): Observable<any> {
  //   this.spinner.show();
  //   this.headers = this.headers;
  //   const hardcodedToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbmlvLmFkbWluQHRyaXBsYXplLmNvbSIsImF1dGhvcml0aWVzIjpbIlMweGdaQmxRckdydGU1UnJENXNSdG9tSkhFUSJdLCJpYXQiOjE3MjExMDU1NDEsImV4cCI6MTcyMTEyNzE0MX0.KRW5weBfO286jbwGjrQpU31kbsHBtPaEQPdQ5ZBr_p1NOHagD-GAC181chRkQva9iB6NRxRB0vrnPhcdLcDz2w';
    
  //   return this.http.get(url, {
  //     headers: this.headers.set('jwt', 'Bearer ' + hardcodedToken)
  //   }).pipe(
  //     tap(_ => this.spinner.hide()),
  //     catchError(err => {
  //       this.spinner.hide();
  //       return throwError(err);
  //     })
  //   );
  // }
  public makeAuthorizedGetRequest2(url: any): Observable<any> {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set('Authorization', 'Bearer ' + this.tokenReflect.get(this.tokenReflect.HOOKS.AUTH_TOKEN)) }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  public makeAuthorizedJwtGetRequest(url: any): Observable<any> {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set('jwt', this.tokenReflect.get(this.tokenReflect.HOOKS.AUTH_TOKEN)) }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          console.log(err,"get");
          if(err.status==401){
            this.roter.navigateByUrl('/login')
          }
          this.spinner.hide();
          return throwError(err);
        }));
  }


  
  /* 
  * Get Methods
  */
  public makeGetRequest(url: any): Observable<any> {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set('jwt', 'ELIV32yf41aRt43aE182t89a27624dbe8d62Thy64e5c345da56d3f325c3ac58dd34rT') }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  public makeGetRequestWithoutJWT(url: any): Observable<any> {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }


  public makeGetRequestWithParams(url: any, payload: any): Observable<any> {
    var query = "";
    var params = payload;
    for (var key in params) {
      query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
    query = query.substring(0, query.length - 1);
    url += "?" + query;
    return this.makeGetRequest(url);
  }

  makeGetRequestWithHeader(url: any, headerKey: any, headerValue: any): any {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .get(url, { headers: this.headers.set(headerKey, headerValue) }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  /* 
  * Post Methods
  */
  private makePostRequest(url: string, payload: any): Observable<any> {
    this.spinner.show();
    return this.http
      .post(url, payload,).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  makePostRequestWithHeaders(url: any, payload: any, headers: any): any {
    this.spinner.show();
    // this.headers = this.headers
    return this.http
      .post(url, payload, { headers: this.headers.set('jwt', 'ELIV32yf41aRt43aE182t89a27624dbe8d62Thy64e5c345da56d3f325c3ac58dd34rT') .append('clientReference', 'elevator') .append('loginId', 'tiniva-bookingengine@tiniva.com') }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }
  makePostRequestWithagent(url: any, payload: any,agentEmailId: any): any {
    this.spinner.show();

    // Append another header to the existing headers
    const updatedHeaders = this.headers
      .set('jwt', this.tokenReflect.get(this.tokenReflect.HOOKS.AUTH_TOKEN))
      .append('clientReference', 'elivator') .append('agentLoginId', agentEmailId);

    return this.http.post(url, payload, { headers: updatedHeaders })
      .pipe(
        tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        })
      );
  }


  makePostRequestWithHeader(url: any, payload: any, headerKey: any, headerValue: any): any {
    this.spinner.show();
    this.headers = this.headers
    return this.http
      .post(url, payload, { headers: this.headers.set(headerKey, headerValue) }).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  public makeFormPostRequest(url: string, payload: any): Observable<any> {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let input = new FormData();
    var params = payload;
    for (var key in params) {
      input.append(key, params[key]);
    }
    return this.makePostRequest(url, input);
  }

  public makeJsonPostRequest(url: string, payload: any): Observable<any> {
    this.headers.append('Content-Type', 'application/json/x-www-form-urlencoded;charset=utf-8')
    return this.makePostRequest(url, payload);
  }

  /* 
  * Put Methods
  */
  private makePutRequest(url: string, payload: any): Observable<any> {
    this.spinner.show();
    return this.http
      .put(url, payload,).pipe(tap(_ => this.spinner.hide()),
        catchError(err => {
          this.spinner.hide();
          return throwError(err);
        }));
  }

  public makeJsonPutRequest(url: string, payload: any): Observable<any> {
    this.headers.append('Content-Type', 'application/json')
    return this.makePutRequest(url, payload);
  }

}

