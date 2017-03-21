import React, { Component } from 'react';
import Contact from '../../../../types/Contact';
import Contacts from 'react-native-contacts';
import ContactAutocomplete from './ContactAutocomplete';
import { View, Text, StyleSheet, Modal } from 'react-native';

class ServiceModal extends Component {
    constructor(props) {
        super(props);

        Contacts.getAll((err, contacts) => {
            this.contactsList = contacts.map(x => 
                new Contact(x.givenName, x.familyName, x.phoneNumbers[0] ? x.phoneNumbers[0].number : null));
        })
    }

    shouldComponentUpdate(nextProps) {
       return this.props.isOpen !== nextProps.isOpen
    }

    render() {
        return (
            <Modal animationType={"slide"}
              transparent={true}
              visible={this.props.isOpen}
              onRequestClose={this.props.closeModal}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.title}> Записать на стенд </Text>
                       
                        <View style={styles.row}>
                            <ContactAutocomplete contacts={this.contactsList} />
                        </View>

                        <View style={styles.row}>
                            <ContactAutocomplete contacts={this.contactsList} />
                        </View> 
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerContainer: {
        backgroundColor: '#fff',
        padding: 20,
        minWidth: 300,
        minHeight: 300,
    },
    title: {
        fontSize: 18
    },
    row: {
        height: 40,
        marginBottom: 10
    }
});

export default ServiceModal;
