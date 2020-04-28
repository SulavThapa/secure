import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

class Landing extends React.Component{

  static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      };

  state = {
      email: ''
  };

  componentDidMount() {
      this.send();
  }

    send = () => {
      axios.post(`http://localhost:5000/sendmail/`,
          {
              //email : this.state.email
          } ,
          {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json; charset=UTF-8'
              },
          })
          .then( res => {
              console.log(res);
              console.log(res.data);
          })
          .catch(err => {
              console.log(`${err}`)
          })
      console.log(this.state.email)
  }

  render(){
    return(
        <React.Fragment>
            <TextInput style={styles.input}
                placeholder="Your Email Here"
            />
            <Button
                title="Press me"
                // onPress={this.send}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.send}
            >
                <Text style={styles.buttonText}>Notification Test</Text>
            </TouchableOpacity>
        </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({

    button: {
        flex :1,
        backgroundColor: '#cc0000',
        // marginVertical: '50%',
        // paddingVertical: 9,
        // marginBottom: 10,
        // borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 30,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: '#eaeee7',
        fontWeight: 'bold'
    },

    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        textAlign: 'center',
        color: '#302F35',
        width: 300,
        marginVertical: '50%',
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 35
    },
});

export default Landing;
