import React, { Component } from 'react';
import {AppRegistry, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, AsyncStorage, Image, View, Navigator} from 'react-native';

import styles from './../../../styles/Style'

export default class AdsList extends Component{
  constructor(props){
    super(props);
	this.state = {
    	ads: []
  	};
	this.onPress = this.onPress.bind(this);
    this.clearData = this.clearData.bind(this);
  }
  onPress() {
    this.props.navigator.push({
	  id: 'AddAd'
	});
  }
  clearData(){
    AsyncStorage.clear();
	alert("All data deleted!");
	this.props.navigator.push({
	  id: 'AdsList'
	});
  }
  componentDidMount() {
	AsyncStorage.getAllKeys((err, keys) => { 
	  AsyncStorage.multiGet(keys, (err, stores) => { 
	    stores.map((result, i, store) => {  
		// get at each store's key/value so you can work with it
		let key = store[i][0]; 
		let values = JSON.parse(store[i][1]);
		let ads = this.state.ads.concat([{
		  'title': values.title, 
		  'details': values.details, 
		  'imgName': values.imgName
		}]);
		this.setState({
		  ads: ads
		})
	  }); 
   }); 
 });  
  }
  adsList() {
	if (this.state.ads.length) {
      return this.state.ads.map((data) => {
        return (
     <View style={styles.rw}>
        <View style={styles.c1}>
		  <Text>{data.title}</Text>
		</View>
        <View style={styles.c2}>
		  <Text>{data.details}</Text>
		</View>
        <View style={styles.c3}>
		  <Text>
		  
		   <Image
          style={{width: 50, height: 50}}
          source={{uri: 'http://192.168.1.13/RNative/imageDir/' + data.imgName + ".png"}}
        />
		  
		  
		  </Text>
		</View>

	</View>	
        )
      })
	}
	else {
      return (
     <View >
		  <Text>No Ad found.</Text>
	</View>	
      )
	}
  }  
  render() {
    return (
<View style={styles.container}>
  <View>
    <ScrollView>
      <Text style={styles.pageHeading}>Classified Ads List</Text>
  	  <View style={styles.rw}>
	    <View style={styles.c1}>
	      <TouchableHighlight onPress={this.onPress}  underlayColor="white">
	        <Text>ADD New</Text>
	      </TouchableHighlight>
	    </View> 
	  </View>
			 
  	  <View style={styles.rw}>
        <View style={styles.c1}>
	      <Text style={styles.fontBold}>Title</Text>
	    </View>
        <View style={styles.c2}>
		  <Text style={styles.fontBold}>Details</Text>
	    </View>
        <View style={styles.c3}>
		  <Text style={styles.fontBold}>Image</Text>
	    </View>
	  </View>	
  	  {this.adsList()}
	</ScrollView>
   </View>
</View>
    );
  }
}
AppRegistry.registerComponent('AdsList', () => AdsList);
