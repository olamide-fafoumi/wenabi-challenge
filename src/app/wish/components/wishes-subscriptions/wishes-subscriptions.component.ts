import { IStat } from './../../shared/models/stat';

import { WishService } from './../../shared/services/wish.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { remapStatus } from 'src/app/utils/utils';

@Component({
    selector: 'wnb-wishes-subscriptions',
    templateUrl: './wishes-subscriptions.component.html',
    styleUrls: ['./wishes-subscriptions.component.scss']
})
export class WishesSubscriptionsComponent implements OnInit {

    private _sub$ = new Subject<void>();
    stats: IStat[] = [];
    @Output() statusToFilter = new EventEmitter();

    constructor(private wishService: WishService) { }

    ngOnInit() {
        this.wishService.getAllSubscription().pipe(takeUntil(this._sub$)).subscribe(
            (results: IStat[]) => {
                results.forEach((stat) => stat.status = remapStatus(stat.status));
                this.stats = results;
            });
    }

    /**
     * Takes th array of subscription, and returns the sum of the count property of each object
     * @returns The sum of all the counts in the array.
     */
    getSumOfSubscriptions(): number {
        return this.stats.reduce((accumulator, obj) => {
            return accumulator + obj.count;
        }, 0);
    }

    /**
     * Takes a status as an argument, and emits that string to the parent component
     * @param {string} status - string - the status to filter by
     */
    sendFilterStatus(status: string) {
        this.statusToFilter.emit(status);
    }

    /**
     * Emits an event with the value 'all' to the parent component.
     */
    resetFilter() {
        this.statusToFilter.emit('all');
    }
}
