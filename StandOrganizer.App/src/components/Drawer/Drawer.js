import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class Drawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                { 
                  this.props.tabs.routes.map((route, index) => (
                    <Text key={'tab-bar-button-' + route.key}
                        onPress={() => this.props.switchTab(route.key)}> 
                       { route.title }
                    </Text> ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Drawer;