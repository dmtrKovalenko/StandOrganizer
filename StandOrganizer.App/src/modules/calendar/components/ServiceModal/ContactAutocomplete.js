import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import Autocomplete from 'react-native-autocomplete-input';
import { defaultRippleColor, primaryColor } from '../../../../config/colorTheme';
import { View, Text, StyleSheet, TouchableNativeFeedback, TextInput} from 'react-native';

const maxContactsCount = 5;

class ContactAutocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactsToShow: [],
            text: null,
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
      return this.state !== nextState || this.props.isActive !== nextProps.isActive;
    }

    disableAutocomplete = () => this.setState({contactsToShow: []})

    activateAutocomplete = () => {
        this.setState({contactsToShow: this.props.contacts.slice(0, maxContactsCount)})
    }

    handleInput = (text) => {
        const contacts = this.props.contacts
            .filter(contact => contact.filter(text))
                .slice(0, maxContactsCount);
    
        this.setState({contactsToShow: contacts, text: text});
    }  

    selectContact = (contact) => {
        this.disableAutocomplete();
        this.setState({text: contact.name});
    }

    renderAutocompleteRow = (data) => (
        <View key={Math.random()} style={styles.autocompleteRow}>
            <TouchableNativeFeedback 
                onPress={() => this.selectContact(data)}
                background={defaultRippleColor}>

                <View style={styles.autocompleteInner}>
                    <View style={styles.icon}>
                        <Icon name='user' size={22}/>
                    </View>
                    <Text style={styles.autocompleteText}>
                        {data.name}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )

    renderTextInput = () => (
        <TextInput
            style={{elevation: 0}}
            value={this.state.text}
            placeholder='Возвещатель'
            underlineColorAndroid={primaryColor}
            onFocus={this.activateAutocomplete}
            onBlur={this.disableAutocomplete}
            onSubmitEditing={this.deactivateAutocomplete}
            onChangeText={this.handleInput}/>
    )
    
    render() {
        return (
          <View style={[styles.container]}>
            <Autocomplete 
                data={this.state.contactsToShow}
                listStyle={styles.listContainer}
                inputContainerStyle={styles.inputContainer}
                renderItem={this.renderAutocompleteRow}
                renderTextInput={this.renderTextInput} />
          </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 200,
        minHeight: 200,
    },
    listContainer: {
        elevation: 2,
    },
    autocompleteRow: {
        height: 35,
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: '#fff'
    },
    inputContainer: {
        backgroundColor: 'transparent', borderWidth: 0
    },
    autocompleteInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    autocompleteText: {
        marginLeft: 10,
        fontSize: 16,
        flex: 8
    },
    icon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    zIndexContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    }
});
 
export default ContactAutocomplete;
