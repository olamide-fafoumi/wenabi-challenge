import { IWish } from './../../shared/models/wish';
import { WishService } from './../../shared/services/wish.service';
import { Subject, takeUntil } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { remapStatus } from 'src/app/utils/utils';

@Component({
    selector: 'wnb-wishes-volunteers',
    templateUrl: './wishes-volunteers.component.html',
    styleUrls: ['./wishes-volunteers.component.scss']
})
export class WishesVolunteersComponent implements OnInit {

    private _sub$ = new Subject<void>();
    wishes: IWish[] = [];
    filteredWishes: IWish[] = [];
    @Input()
    filterStatus: string;

    constructor(private wishService: WishService) { }

    ngOnInit() {
        this.wishService.getAllWishes().pipe(takeUntil(this._sub$)).subscribe(
            (results: IWish[]) => {
                results.forEach((stat) => stat.status = remapStatus(stat.status));
                this.wishes = results;
                this.filteredWishes = results;
            });
    }

    filterByStatus(status: string) {
        this.filteredWishes = this.wishes.slice().filter(wish =>
            wish.status.toLowerCase().includes(status.toLowerCase())
        );
    }
}
