import { WishesVolunteersComponent } from './wish/components/wishes-volunteers/wishes-volunteers.component';
import { WishesSubscriptionsComponent } from './wish/components/wishes-subscriptions/wishes-subscriptions.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WishesVolunteerCardComponent } from './wish/components/wishes-volunteer-card/wishes-volunteer-card.component';

@NgModule({
    declarations: [
        AppComponent,
        WishesSubscriptionsComponent,
        WishesVolunteersComponent,
        WishesVolunteerCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [WishesVolunteerCardComponent]
})
export class AppModule { }
