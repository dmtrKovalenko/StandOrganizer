import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarDateFormatter } from 'angular-calendar';
import { format, startOfDay } from 'date-fns';

import { ActivatedRoute } from '@angular/router';
import { CalendarService } from './../core/calendar.service';
import { DateFormatter } from './../core/DateFormatter';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: CalendarDateFormatter,
    useClass: DateFormatter
  }]
})
export class DayComponent implements OnInit {
  viewDate: Date;
  locale: string;

  events: Array<CalendarEvent>;

  constructor(
    private calendarService: CalendarService,
    private route: ActivatedRoute,
  ) {
    this.locale = 'ru';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.viewDate = startOfDay(new Date(params['date']));

      this.calendarService.getEventsList()
        .then(fetchedEvents => this.events = fetchedEvents);
    });
  }
}
