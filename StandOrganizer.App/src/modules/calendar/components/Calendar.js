import React, {Component, PropTypes} from 'react';
import DayTimeline from './DayTimeline/TimeLineListView';
import ServiceModal from './ServiceModal/ServiceModal';
import StripCalendar from './StripCalendar/StripCalendar';
import {View} from 'react-native';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isServiceModalOpen: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.calendarState.selectedDate !== nextProps.calendarState.selectedDate ||
      this.state !== nextState)
  }

  toggleServiceModal = () => this.setState({isServiceModalOpen: !this.state.isServiceModalOpen})

  render() {
    return (
      <View>
          <StripCalendar
              onWeekChanged={this.props.updateDynamicTitle}
              onDaySelected={this.props.selectDate} />

          <DayTimeline
              date={this.props.calendarState.selectedDate}
              services={this.props.calendarState.services}
              openServiceModal={this.toggleServiceModal} />

          <ServiceModal 
              isOpen={this.state.isServiceModalOpen}
              closeModal={this.toggleServiceModal}/>
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
