import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Reflector<T>{
    
    HOOKS = {
        AUTH_TOKEN: 'FCM_AUTH_TOKEN',
        USER_DETAILS: 'FCM_USER_DETAILS',
        SELECTED_DESTINATION: 'SELECTED_DESTINATION',
        SELECTED_PROPERTY: 'SELECTED_PROPERTY',
        SAVED_PARAMS_REQUEST: 'SAVED_PARAMS_REQUEST',
        WHITE_BACKGROUND: 'WHITE_BACKGOUND',
        COMPANY_DETAILS:'COMPANY_DETAILS',
        USER_LOGIN_DETAILS: 'FCM_USER_LOGIN_DETAILS',
        BACK_FROM_QUOTATION:"BACK_FROM_QUOTATION",
        IS_DESTINATION_CHANGED:"IS_DESTINATION_CHANGED",
        ROOM_AVAILABILITY_DATA: "ROOM_AVAILABILITY_DATA",
        ROOMS_PAYLOAD:"ROOMS_PAYLOAD",
        ROOMS_DETAILS:"ROOMS_DETAILS",
        ROOM_RATEPLAN_DATA:"ROOM_RATEPLAN_DATA",
        SELECTED_HOTELDETAILS:"SELECTED_HOTELDETAILS",
        CANCELLATION_POLICY:"CANCELLATION_POLICY"
    }

    constructor() {
        try {
            this.model = JSON.parse(localStorage.getItem('reflectStore')||'{}')
            if (this.model == undefined || this.model == 'undefined') {
                this.model = {}
            }
        } catch (e) { }
    }

    private reactions:any = {}
    private model: any = {}

    public set(key: string, value: T) {
        this.model[key] = value
        if (this.reactions[key] == undefined) {
            this.reactions[key] = new Subject<T>()
        }
        localStorage.setItem('reflectStore', JSON.stringify(this.model))
        this.reactions[key].next(value)
    }
    
    public get(key: string): T {
        return this.model[key]
    }

    public observe(key: string): Observable<T> {
        if (this.reactions[key] == undefined) {
            this.reactions[key] = new Subject<T>()
        }
        return this.reactions[key];
    }
}