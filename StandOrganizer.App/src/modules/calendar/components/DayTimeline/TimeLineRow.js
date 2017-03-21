import React from 'react';
import {textColor, defaultRippleColor, defaultRippleColorRGBA} from '../../../../config/colorTheme';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

class TimeLineRow extends React.Component {
  timeoutPressHandle = () => {
    setTimeout(() => this.props.onPress(this.props.time), 0)
  }

  render() {
    const backgroundColor = this.props.isActive ? defaultRippleColorRGBA : 'transparent';

    return (
      <View style={[styles.row, {backgroundColor: backgroundColor}]}>
        <TouchableNativeFeedback onPress={this.timeoutPressHandle}
           background={defaultRippleColor}>
            <View style={styles.innerContainer}>
              <Text style={styles.time}> {this.props.time} </Text>
              
              { 
                this.props.isActive ? 
                  <View style={styles.add}>
                    <Text> Коснитесь, чтобы записать на это время </Text>
                  </View>
                : null 
              }

            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

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
    flex: 1,
    fontSize: 18,
    marginLeft: 3,
    marginTop: 2,
    color: textColor
  },
  add: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TimeLineRow;
