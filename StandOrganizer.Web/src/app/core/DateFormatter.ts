import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { capitalizeFirstLetter } from '../../utils/common';

export class DateFormatter extends CalendarDateFormatter {
  public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date).toUpperCase();
  }

  public monthViewTitle({date, locale}: DateFormatterParams): string {
    return capitalizeFirstLetter(new Intl.DateTimeFormat(locale, {year: 'numeric', month: 'short'}).format(date));
  }

  public dayViewTitle({date, locale}: DateFormatterParams): string {
    return capitalizeFirstLetter(new Intl.DateTimeFormat(locale, {weekday: 'long', month: 'long', day: 'numeric'}).format(date));
  }

  public dayViewHour({date, locale}: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, {hour: 'numeric', minute: 'numeric'}).format(date);
  }
}
