import { WishesVolunteersComponent } from './wish/components/wishes-volunteers/wishes-volunteers.component';
import { WishesSubscriptionsComponent } from './wish/components/wishes-subscriptions/wishes-subscriptions.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WishesVolunteerCardComponent } from './wish/components/wishes-volunteer-card/wishes-volunteer-card.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

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
    providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
    bootstrap: [AppComponent],
    exports: [WishesVolunteerCardComponent]
})
export class AppModule { }
