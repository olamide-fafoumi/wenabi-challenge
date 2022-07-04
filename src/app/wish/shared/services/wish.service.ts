import { IWish } from './../../shared/models/wish';
import { Stat } from '../models/stat';
import { BASE_API_URL, GET_STATS_ENDPOINT, GET_ALL_WISHES_ENDPOINT } from './../../../utils/util.constants';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WishService {

    constructor(private httpClient: HttpClient) { }

    getAllSubscription(): Observable<Stat[]> {
        return this.httpClient
            .get<Stat[]>(`${BASE_API_URL}${GET_STATS_ENDPOINT}`);
    }

    getAllWishes(): Observable<IWish[]> {
        return this.httpClient
            .get<IWish[]>(`${BASE_API_URL}${GET_ALL_WISHES_ENDPOINT}`);
    }

}
