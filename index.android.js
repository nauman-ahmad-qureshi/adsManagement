import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  View,
  Navigator
} from 'react-native';

import MainPage from './app/components/MainPage/MainPage';
import AdsList from './app/components/AdsList/AdsList';
import AddAd from './app/components/AddAd/AddAd';

import styles from './styles/Style'


class AdsManager extends Component {
  renderScene( route, navigator) {
  	switch(route.id) {
		case 'MainPage':
		return (<MainPage navigator={navigator} />);		
		case 'AdsList':
		return (<AdsList navigator={navigator} />);		
		case 'AddAd':
		return (<AddAd navigator={navigator} />);		
	}
  }
  render() {
    return (
	 <Navigator 
	 	initialRoute={{id: 'MainPage'}}
	 	renderScene={this.renderScene}
		configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
	 />

    );
  }
}
AppRegistry.registerComponent('AdsManager', () => AdsManager);
