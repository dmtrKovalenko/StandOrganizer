import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TimeLineRow = props => {
  return (
        <View style={styles.row}>
            <Text style={styles.time}> {props.time} </Text>
        </View>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    fontSize: 16,
    marginLeft: 5
  }
});

export default TimeLineRow;
