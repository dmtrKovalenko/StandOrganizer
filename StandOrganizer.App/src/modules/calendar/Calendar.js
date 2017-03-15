import React, { Component, PropTypes } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {View} from 'react-native';

class Calendar extends Component {
    render() {
        return (
            <View>
                <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 0}}
                    style={{elevation: 5}}
                    calendarHeaderSt yle={{color: 'white'}}
                    calendarColor={'#00BCD4'}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    highlightColor={'yellow'}
                    highlightDateNumberStyle={{color: 'yellow', fontSize: 10, margin: 0}}
                    highlightDateNameStyle={{color: 'yellow'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    styleWeekend
                    iconContainer={{flex: 0.07}} />
            </View>
        );
    }
}

Calendar.propTypes = {

};

export default Calendar;