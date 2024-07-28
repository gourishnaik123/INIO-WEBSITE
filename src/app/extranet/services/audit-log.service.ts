
import { Injectable } from '@angular/core';
import { URLConstants } from 'src/app/core/URLConstants';
import { ExtranetRestService } from '../services/extranet-rest.service';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class AuditLog {
    constructor(private rest: ExtranetRestService) { }
    public getPropertyLog(productId:any, action:any, startDate:any, endDate:any, category:any, roomId:any, inventoryUpdatedDateFor:any, priceUpdatedDateFor:any, pageno:any): Observable<any> {
        let url = ""
        if (productId) { url += "productId=" + productId }
        if (action) { url += "&actionType=" + action }
        if (startDate) { url += "&startDate=" + startDate }
        if (endDate) { url += "&endDate=" + endDate }
        if (category) { url += "&category=" + category }
        if (roomId) { url += "&roomId=" + roomId }
        if (pageno) { url += "&pageno=" + pageno }
        if (inventoryUpdatedDateFor) { url += "&inventoryUpdatedDateFor=" + inventoryUpdatedDateFor }
        if (priceUpdatedDateFor) {
            url += "&priceUpdatedDateFor=" + priceUpdatedDateFor
        }
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_PROPERTY + "?" + url)
    }
    public getQuotationbyid(id: string): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.BOOKINGS.FETCH_QUOTATION_BYID + id)
    }

    getAllQuote(monthYear:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.BOOKINGS.FETCH_ALL_QUOTATION + monthYear);
    }
    public getRoomLog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_ROOM + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=room")
    }
    public getRatePlanlog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_RATEPLAN + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=rateplan")
    }
    public pushbookingId(id: string) {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.BOOKINGS.CONFIRM_BOOKING + id)
    }
    public getInventoryLog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_INVENTORY + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=inventory")
    }
    public getPriceLog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_PRICE + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=price")
    }
    public getDealsLog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_DEALS + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=deals")

    }
    public getPromoLog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_PROMOTION + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=promos")

    }
    public getChannelmanagerLog(productId:any, action:any, startdate:any, endDate:any): Observable<any> {
        return this.rest.makeGetRequest(URLConstants.EXTRANET.AUDIT_LOGS.LOG_CHANNEL_MANAGER_LINKAGE + "?productId=" + productId + "&actionType=" + action + "&startDate=" + startdate + "&endDate=" + endDate + "&pageno=1&category=cmlinkage")

    }
    getBookings(model:any, callBack: Function) {
        this.rest.makeJsonPostRequest(URLConstants.EXTRANET.BOOKINGS.FETCH_ALL_BOOKINGS, model).subscribe(res => {
            callBack(res)
        }, err => {
            console.log(err, "error");

        })
    }
    // getAllBookings(data:any, callBack: Function) {
    //     this.rest.makeJsonPostRequest(URLConstants.EXTRANET.BOOKINGS.FETCH_ALL_QUOTATION,data).subscribe(res => {
    //         callBack(res)
    //     }, err => {
    //         console.log(err, "error");

    //     })
    // }

    getAllBookings(monthYear: any, callBack: Function) {
        this.rest.makeGetRequest(URLConstants.EXTRANET.BOOKINGS.FETCH_ALL_QUOTATION + monthYear).subscribe(res => {
            callBack(res)
        }, err => {
            console.log(err, "error");

        })
    }
    getBookingbyid(id: string): Observable<any> {
        return this.rest.makeGetRequestwitRef(URLConstants.EXTRANET.BOOKINGS.CANCELLATION + id);
    }
    cancelbooking(model:any, callBack: Function) {
        this.rest.makeJsonPostRequest(URLConstants.EXTRANET.BOOKINGS.CANCEL_BOOKING, model).subscribe(res => {
            callBack(res)
        }, err => {
            console.log(err, 'error');
        })
    }


    reConfirmBooking(model:any, callBack: Function) {
        this.rest.makeJsonPostRequest(URLConstants.EXTRANET.BOOKINGS.RECONFIRM_BOOKING, model).subscribe(res => {
            callBack(res)
        }, err => {
            console.log(err, 'error');
        })
    }
}
