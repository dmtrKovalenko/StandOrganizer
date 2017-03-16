import React, { Component } from 'react';
import { ListView, View, Text, StyleSheet } from 'react-native';

class TimeLineListView extends Component {
    getInitialDataSource = () => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = [];

        for (let i = 8; i <= 20; i++) {
            dataSource.push(i)
        }

        return ds.cloneWithRows(dataSource);
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                    dataSource={this.getInitialDataSource()}
                    renderRow={(rowData) => <Text>{rowData}</Text>} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});

export default TimeLineListView;
