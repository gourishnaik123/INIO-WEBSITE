import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Reflector<T>{

    constructor() {
        try {
            const reflectStoreData = localStorage.getItem('reflectStore');
    
            if (typeof reflectStoreData === 'string') {
                this.model = JSON.parse(reflectStoreData);
            } else {
                // Handle the case when reflectStoreData is not a string or is null
                this.model = {};
            }
        } catch (e) {
            // Handle parsing errors here, if needed
            // For example, you could log the error
            console.error('Error parsing reflectStore data:', e);
        }
    }
    
    private reactions:any
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