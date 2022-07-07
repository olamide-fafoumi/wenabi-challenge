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

    getSumOfSubscriptions(): number {
        return this.stats.reduce((accumulator, obj) => {
            return accumulator + obj.count;
        }, 0);
    }

    sendFilterStatus(status: string) {
        this.statusToFilter.emit(status);
    }

    resetFilter() {
        this.statusToFilter.emit('all');
    }
}
