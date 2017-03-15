import React from 'react';
import { lightenPrimaryColor } from '../../config/colorTheme';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native'

const IconButton = props => (
    <View style={props.style}>
       <TouchableNativeFeedback onPress={props.onPress}
          background={TouchableNativeFeedback.Ripple(lightenPrimaryColor, true)}>
            <View style={styles.iconContainer}>
                {props.children}
            </View>
        </TouchableNativeFeedback> 
    </View>
);

const styles = StyleSheet.create({
     iconContainer: {
        width: 30, 
        height: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default IconButton;