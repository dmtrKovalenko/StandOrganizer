import React, {Component} from 'react';
import TimeLineRow from './TimeLineRow';
import ServiceOverlay from './ServiceOverlay';
import {View, StyleSheet, ScrollView} from 'react-native';

const getInitialDataSource = () => {
  return [8,9,10,11,12,13,14,15,16,17,18,19,20];
};

class TimeLineListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTime : null,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.date !== nextProps.date || this.state !== nextState;
  }

  handleRowTap = (time) => {
    if (this.state.activeTime == time) {
      this.props.openServiceModal();
    } else {
      this.setState({activeTime: time})
    }
  }

  renderTimeLine = () => {
    const dataSource = getInitialDataSource();

    return dataSource.map(rowData => {
      return (
        <TimeLineRow time={rowData} 
          isActive={rowData == this.state.activeTime}
          key={Math.random()} 
          onPress={this.handleRowTap}/>)
    })
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
