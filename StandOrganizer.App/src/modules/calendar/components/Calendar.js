import React, {Component, PropTypes} from 'react';
import DayTimeline from './DayTimeline/TimeLineListView';
import StripCalendar from './StripCalendar/StripCalendar';
import {View} from 'react-native';

class Calendar extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.calendarState.selectedDate !== nextProps.calendarState.selectedDate );
  }

  render() {
    return (
      <View>
          <StripCalendar
              onWeekChanged={this.props.updateDynamicTitle}
              onDaySelected={this.props.selectDate}/>

          <DayTimeline
              date={this.props.calendarState.selectedDate}
              services={this.props.calendarState.services}/>
      </View>
    );
  }
}

Calendar.propTypes = {
  onWeekChanged: PropTypes.func,
  onDaySelected: PropTypes.func,
  date: PropTypes.string,
  services: PropTypes.array
};

export default Calendar;
