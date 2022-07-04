import { Stat } from '../../shared/models/stat';
import { WishService } from './../../shared/services/wish.service';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'wnb-wishes-subscriptions',
    templateUrl: './wishes-subscriptions.component.html',
    styleUrls: ['./wishes-subscriptions.component.scss']
})
export class WishesSubscriptionsComponent implements OnInit {

    private _sub$ = new Subject<void>();
    stats: Stat[] = [];

    constructor(private wishService: WishService) { }

    ngOnInit() {
        this.wishService.getAllSubscription().pipe(takeUntil(this._sub$)).subscribe(
            (results: Stat[]) => {
                results.forEach((stat) => this.stats.push(new Stat(stat.status, stat.count)));
            });
    }

    getSumOfSubscriptions(): number {
        return this.stats.reduce((accumulator, obj) => {
            return accumulator + obj.count;
        }, 0);
    }

}
