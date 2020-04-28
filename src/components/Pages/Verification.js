import React,  {Component} from 'react';
import { StyleSheet, Text, TextInput, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';


class Verification extends React.Component{

    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
    };

    render() {
        return(
            <React.Fragment>
                <Text>
                    This is the verification Page.
                </Text>
            </React.Fragment>
        )
    }
}

export default Verification;