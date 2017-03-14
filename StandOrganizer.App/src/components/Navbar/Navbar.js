import React from 'react';
import { primaryColor, darkenPrimaryColor } from '../../config/colorTheme'
import { View, Text, StyleSheet } from 'react-native';

const Navbar = props => {
    return (
        <View style={styles.container}>
            <Text> { props.title } </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        elevation: 5,
        backgroundColor: primaryColor,
        borderBottomWidth: 1,
        borderColor: darkenPrimaryColor,
    }
})

export default Navbar;