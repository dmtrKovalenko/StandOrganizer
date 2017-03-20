import React, {Component} from 'react';
import color from 'color';
import {additionalColors} from '../../../../config/colorTheme';
import {calcAccurateHours} from '../../../../utils/timeHelper';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

class ServiceOverlay extends Component {
  /**
   * Calculate margin from top for oveley item;
   * Offset = hours number * 60px(height of item)
   * @param {number} hours - hours number
   * @returns {number} - offset from top
   */
  calcTopOffset = (hours) => {
    const hoursOffset = hours - 8;

    return hoursOffset * 60;
  }

  /**
   * Calculate height of overlay service View (1 hour = 60px(height of item) -1px(for shadow))
   * @param {number} duration - duration of service
   * @returns {number} - height of overley
   */
  calcHeight = (duration) => duration * 60 - 1;

  render() {
    const {service} = this.props;

    const date = new Date(service.startTime);

    const topOffset = this.calcTopOffset(calcAccurateHours(date));
    const height = this.calcHeight(service.duration);
    const backgroundColor = additionalColors[Math.round(service.id % 4)];
    const rippleColor = TouchableNativeFeedback.Ripple(color(backgroundColor).darken(0.3), true);

    return (
      <View style={[styles.container, {top: topOffset, height: height, backgroundColor: backgroundColor}]}>
        <TouchableNativeFeedback background={rippleColor}>
          <View style={styles.innerContainer}>
            <View style={styles.left}>
              <Text style={styles.overlayText}> {service.whitness} </Text>
              <Text style={styles.overlayText}> {service.assistant} </Text>
            </View>

            <View style={styles.right}>
              <Text style={styles.time}> 9:00 - 11:00 </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff59d',
    position: 'absolute',
    right: 0,
    left: 50,
    elevation: 2,
    borderRadius: 2,
    flexDirection: 'row'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    flex: 1.5,
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayText: {
    color: 'white',
    fontSize: 17,
    marginLeft: 5,
    marginVertical: 0
  },
  time: {
    color: 'white',
    fontSize: 17
  }
});

export default ServiceOverlay;
