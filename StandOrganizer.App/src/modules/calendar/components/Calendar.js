import React, { Component, PropTypes } from 'react';
import DayTimeline from './DayTimeline/TimeLineListView';
import StripCalendar from './StripCalendar/StripCalendar';
import { View } from 'react-native';

class Calendar extends Component {
    render() {
        return (
            <View>
                <StripCalendar onWeekChanged={this.props.updateDynamicTitle}/>
                <DayTimeline />
            </View>
        );
    }
}

Calendar.propTypes = {

};

export default Calendar;