import { IStat } from './../models/stat';
import { IWish } from './../../shared/models/wish';
import { BASE_API_URL, GET_STATS_ENDPOINT, GET_ALL_WISHES_ENDPOINT } from '../../../utils/utils';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WishService {

    constructor(private httpClient: HttpClient) { }


    /**
     * Get all subscriptions from the API and return them as an Observable of IStat[].
     * 
     * @returns Observable<IStat[]>
     */
    getAllSubscription(): Observable<IStat[]> {
        return this.httpClient
            .get<IStat[]>(`${BASE_API_URL}${GET_STATS_ENDPOINT}`);
    }

    /**
     * Get all wishes from the API and return them as an Observable of IWish[].
     * 
     * @returns An observable of an array of IWish objects.
     */
    getAllWishes(): Observable<IWish[]> {
        return this.httpClient
            .get<IWish[]>(`${BASE_API_URL}${GET_ALL_WISHES_ENDPOINT}`);
    }

}
