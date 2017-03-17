import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ServiceOverlay extends Component {
  calcTopOffset = (hours) => {
    const hoursOffset = hours - 8;

    return (hoursOffset * 60) - hoursOffset + 50 + 2;
  }

  render() {
    const date = new Date(this.props.service.startTime);
    const topOffset = this.calcTopOffset(date.getHours());

    return (
        <View style={[styles.container, {top: topOffset}]} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    width: 250
  }
});

export default ServiceOverlay;
