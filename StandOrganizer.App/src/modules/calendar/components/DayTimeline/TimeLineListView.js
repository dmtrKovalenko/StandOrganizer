import React, {Component} from 'react';
import TimeLineRow from './TimeLineRow';
import ServiceOverlay from './ServiceOverlay';
import {View, StyleSheet, ScrollView} from 'react-native';

const getInitialDataSource = () => {
  return [8,9,10,11,12,13,14,15,16,17,18,19,20];
};

class TimeLineListView extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.date !== nextProps.date;
  }

  renderTimeLine = () => {
    const dataSource = getInitialDataSource();

    return dataSource.map(rowData => {
      return (
        <View key={Math.random()}>
            <TimeLineRow time={rowData} />
        </View>
      );
    });
  }

  renderServices = (services) => {
    return services.map(service => <ServiceOverlay key={Math.random()} service={service} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.listView}>
            <View style={styles.timeLineItems}>
              { this.renderTimeLine() }
            </View>

            <View style={styles.fixed}>
              { this.renderServices(this.props.services) }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  listView: {
    paddingHorizontal: 15
  },
  timeLineItems: {

  },
  title: {
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 20,
    color: 'rgba(0,0,0,0.44)',
    position: 'absolute'
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default TimeLineListView;
