import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconButton from '../Buttons/IconButton'
import { primaryColor, darkenPrimaryColor } from '../../config/colorTheme'
import { View, Text, StyleSheet } from 'react-native';

const Navbar = props => {
    return (
        <View style={props.sticky ? styles.container : styles.navbarShadowed}>
            <View style={styles.leftButtonContainer}>
                <IconButton onPress={props.leftButtonPress}>
                    <Icon name='menu' size={24} color='white'/>
                </IconButton>
            </View>
            <Text style={styles.title}>
                { props.title } 
            </Text>
        </View>
    );
};

const containerStyles = {
    height: 60,
    backgroundColor: primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
}

const styles = StyleSheet.create({
    container: containerStyles,
    navbarShadowed: {
        ...containerStyles,
        elevation: 4,
        borderBottomWidth: 0.1,
        borderColor: darkenPrimaryColor,
    },
    leftButtonContainer: {
        marginTop: 2,
        minWidth: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 12,
        fontSize : 20,
        color: 'white',
    }
})

export default Navbar;