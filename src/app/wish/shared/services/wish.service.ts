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

    getAllSubscription(): Observable<IStat[]> {
        return this.httpClient
            .get<IStat[]>(`${BASE_API_URL}${GET_STATS_ENDPOINT}`);
    }

    getAllWishes(): Observable<IWish[]> {
        return this.httpClient
            .get<IWish[]>(`${BASE_API_URL}${GET_ALL_WISHES_ENDPOINT}`);
    }

}
