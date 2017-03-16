import React, { Component, PropTypes } from 'react';
import StripCalendar from './components/StripCalendar';
import {View} from 'react-native';

class Calendar extends Component {
    render() {
        return (
            <View>
                <StripCalendar onWeekChanged={this.props.updateDynamicTitle}/>
            </View>
        );
    }
}

Calendar.propTypes = {

};

export default Calendar;