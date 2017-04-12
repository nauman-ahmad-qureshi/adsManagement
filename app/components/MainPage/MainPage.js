import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, TouchableHighlight, AsyncStorage, View, Navigator} from 'react-native';
import styles from './../../../styles/Style'

export default class MainPage extends Component{
  constructor(props){
    super(props);
	this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.props.navigator.push({
	  id: 'AdsList'
	});
  }
  render() {
    return (
	  <View style={styles.containerWelcome}>
	    <Text style={styles.pageHeading}>Ads Management Application!</Text>
		<TouchableHighlight	style={styles.button} onPress={this.onPress} underlayColor="white">
		  <Text style={styles.buttonText}> Press me to Enter!!! </Text>
		</TouchableHighlight>
	  </View>
	);
  }
}

AppRegistry.registerComponent('MainPage', () => MainPage);
