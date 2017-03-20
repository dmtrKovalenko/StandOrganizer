import React from 'react';
import {textColor, defaultRippleColor} from '../../../../config/colorTheme';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const TimeLineRow = props => {
  return (
    <View style={styles.row}>
      <TouchableNativeFeedback background={defaultRippleColor}>
        <View style={styles.innerContainer}>
          <Text style={styles.time}> {props.time} </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  time: {
    fontSize: 18,
    marginLeft: 3,
    marginTop: 2,
    color: textColor
  }
});

export default TimeLineRow;
