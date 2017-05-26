import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { CalendarService } from './core/calendar.service';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent
],
imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    AppRoutingModule,
    CalendarModule.forRoot()
  ],
  providers: [
    CalendarService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
