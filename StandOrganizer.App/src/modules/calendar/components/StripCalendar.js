import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import ArrowLeft from '../../../assets/arrow_left_24dp.png';
import ArrowRight from '../../../assets/arrow_right_24dp.png';
import moment from 'moment'
import { StyleSheet } from 'react-native'
import { primaryColor, accentColor, disabledTextColor } from '../../../config/colorTheme';

const getWeeksMonth = (date) => {
    const month = date.month();
    const endOfWeekMonth = date.add(7, 'days').month();

    const monthName = moment().month(month).format("MMMM");

    if (month !== endOfWeekMonth) {
        const endMonth = moment().month(endOfWeekMonth).format("MMMM");

        return `${monthName}/${endMonth}`;
    }

    return monthName
}

const StripCalendar = props => {
    return (
        <CalendarStrip
            onWeekChanged={(date) => props.onWeekChanged(getWeeksMonth(date))}
            calendarAnimation={{type: 'sequence', duration: 60}}
            selection='background'
            highlightColor={'transparent'}
            style={styles.calendarStyle}
            calendarHeaderStyle={styles.headerStyle}
            calendarColor={primaryColor}
            dateNumberStyle={styles.dateStyle}
            dateNameStyle={styles.dateStyle}
            highlightDateNumberStyle={styles.highlightDateNumberStyle}
            highlightDateNameStyle={styles.accentedDate}
            disabledDateNameStyle={styles.disabledDate}
            disabledDateNumberStyle={styles.disabledDate}
            weekendDateNameStyle={styles.accentedDate}
            weekendDateNumberStyle={styles.dateStyle}
            iconLeft={ArrowLeft}
            iconRight={ArrowRight}
            iconContainer={styles.iconContainer} /> 
    );
};

const styles = StyleSheet.create({
    calendarStyle: {
        elevation: 5
    },
    headerStyle : { //hide header
        width: 0,
        height: 0,
    },
    dateStyle: {
        color: 'white'
    },
    accentedDate: {
        color: accentColor
    },
    disabledDate: {
        color: disabledTextColor
    },
    highlightDateNumberStyle: {
        color: accentColor,
        width: 25,
        textAlign: 'center',
        borderBottomWidth: 2, 
        borderColor: accentColor
    },
    iconContainer: {
        flex: 0.08
    }
})

export default StripCalendar;