import { IWish } from './../../shared/models/wish';

import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'wnb-wishes-volunteer-card',
    templateUrl: './wishes-volunteer-card.component.html',
    styleUrls: ['./wishes-volunteer-card.component.scss']
})
export class WishesVolunteerCardComponent implements OnInit {

    @Input()
    volunteerWish: IWish;

    constructor() { }

    ngOnInit() {

    }

    getHourDifference(start: string, end: string) {
        const startTime = moment(start);
        const endTime = moment(end);
        const duration = moment.duration(endTime.diff(startTime));
        const hours = duration.asHours();
        const minutes = duration.asMinutes() % 60;

        return hours + "h" + minutes;
    }

}
