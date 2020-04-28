import React, { Component } from "react";
import { StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';


class Landing extends React.Component{

  static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }

  render(){
    return(
       <TouchableOpacity 
          style={styles.button} 
          onPress={() =>
          // this.props.navigation.navigate('Login')}
          }
          >
          <Text style={styles.buttonText}>Notification Test</Text>
        </TouchableOpacity>
    )
  }
}