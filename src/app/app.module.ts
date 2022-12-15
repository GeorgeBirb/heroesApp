//https://www.youtube.com/watch?v=g2gA7SSy4lw
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//Εδώ γίνεται το import του app.component.ts
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  //Εδώ βλέπει ο <app-root> του index.html και πηγαίνει στο app.component.ts
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // A bootstrapped component is an entry component that Angular loads into the DOM
  // during the bootstrap process (application launch).
  // Other entry components are loaded dynamically by other means, such as with the router.
  // Angular loads a root AppComponent dynamically because it's listed by type in @NgModule.
  bootstrap: [AppComponent]
})
export class AppModule { }
