import { CalendarEvent } from 'angular-calendar';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { googleClaendarId, googleApiKey } from '../../constants/config';
import { pallete, reccurentColor } from '../../constants/color-pallete';
import { CustomCalendarEvent } from './CalendarEvent';

import RRule, { rrulestr } from 'rrule';
import { endOfYear, setHours, setMinutes } from 'date-fns';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService {
    events: Array<CustomCalendarEvent>;

    constructor (
        private http: Http
    ) { }

    getEventsList(minDate?: Date, maxDate?: Date): Promise<Array<CustomCalendarEvent>> {
      const queryMinDate = minDate ? `&timeMin=${minDate.toISOString()}` : '';
      const queryMaxDate = maxDate ? `&timeMax=${maxDate.toISOString()}` : '';

      return this.http.get(
        // tslint:disable-next-line:max-line-length
        `https://www.googleapis.com/calendar/v3/calendars/${googleClaendarId}/events?key=${googleApiKey}${queryMinDate}${queryMaxDate}` )
        .map(response => this.mapGoogleEvents(response, queryMinDate === ''))
            .toPromise();
    }

    mapGoogleEvents(response: Response, toShowRecurent: boolean): Array<CalendarEvent> {
        const events = new Array<CustomCalendarEvent>();

        const items = response.json().items;

        items.forEach(event => {
            const startDate = new Date(event.start.dateTime);
            const endDate = new Date(event.end.dateTime);

            if (event.recurrence && toShowRecurent) {
                const rule = rrulestr(event.recurrence[0]);

                rule.options.dtstart = startDate;
                rule.options.until = endOfYear(new Date());

                rule.all().forEach(date => {
                    const formattedDate = new Date(date);

                    events.push(new CustomCalendarEvent(
                        event.summary, this.syncTime(formattedDate, startDate), this.syncTime(formattedDate, endDate),  reccurentColor)
                    );
                });
            } else {
                events.push(new CustomCalendarEvent(event.summary, startDate, endDate, this.getIndexedColor(events)));
            }
        });

        return events as Array<CalendarEvent>;
    }

    getIndexedColor(events: Array<any>) {
        const lengthString = events.length.toString();
        const index = lengthString[lengthString.length - 1];

        return pallete[index];
    }

    syncTime(target: Date, source: Date): Date {
        return setMinutes((setHours(target, source.getHours())), source.getMinutes());
    }
 }
