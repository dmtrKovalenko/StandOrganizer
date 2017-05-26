import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { CalendarEvent, CalendarDateFormatter } from 'angular-calendar';
import { format } from 'date-fns';

import { CalendarService } from './../core/calendar.service';
import { DateFormatter } from './../core/DateFormatter';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: CalendarDateFormatter,
    useClass: DateFormatter
  }]
})
export class CalendarComponent implements OnInit {
  viewDate: Date;
  locale: string;

  events: Array<CalendarEvent>;

  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) {
    this.viewDate = new Date();
    this.locale = 'ru';
  }

  ngOnInit() {
    this.calendarService.getEventsList()
      .then(fetchedEvents => this.events = fetchedEvents);
  }

  dayClicked(day) {
    this.viewDate = day.date;
    this.router.navigate(['day', this.viewDate.toDateString()]);
  }
}
