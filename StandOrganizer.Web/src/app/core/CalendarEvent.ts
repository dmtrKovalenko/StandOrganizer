export class CustomCalendarEvent {
    title: string;
    start: Date;
    end?: Date;
    color: any;

    constructor(
        title: string,
        startDate: Date,
        endDate: Date,
        color: any
    ) {
        this.title = title;
        this.start = startDate;
        this.end = endDate;
        this.color = { primary: color, secondary: color};
    }
}
