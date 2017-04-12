import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  AsyncStorage, 
  View, 
  Navigator, 
  TouchableOpacity,
  Platform,
  Image,
  Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
var FileUpload = require('NativeModules').FileUpload;
import styles from './../../../styles/Style'
export default class AddAd extends Component{
	
  constructor(props){
    super(props);
    this.state = { 
	  title: '', 
	  details: '',
      avatarSource: null,
      imgBase64: '',
	  imgName: '',
	}
    this.persistData = this.persistData.bind(this);
    this.cancelData = this.cancelData.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }
  
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      var source, temp;
      temp = response.data;
      if (Platform.OS === 'android') {
        source = {uri: response.uri, isStatic: true};
      } else {
         source = {uri: response.uri.replace('file://', ''), isStatic: true};
      }
      this.setState({
        avatarSource: source,
        imgBase64: temp,
      });
    });
  }

  persistData(){
    //AsyncStorage.clear();
    let title = this.state.title;
    let details = this.state.details;
	let timeStamp = Date.parse(new Date());
	var STORAGE_KEY = "ads_" + timeStamp;
    var imgName = "img_" +  timeStamp;
    this.setState({imgName: imgName});
	this.upload(imgName);
	let ads_obj = { 
	  title: title, 
	  details: details,
	  imgName: imgName
	};
	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ads_obj)).done();
    this.setState({
	  title: title, 
	  persistedTitle: title, 
	  details: details, 
	  persistedPhone: details, 
	  imgName: imgName
    })
    alert("Data added!");
    this.props.navigator.push({
      id: 'AdsList'
    });
  }
  
  upload(imgName){
    var obj = {
	  uploadUrl: 'http://192.168.1.13/RNative/upload.php',
	  method: 'POST', // default 'POST',support 'POST' and 'PUT'
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  fields: {
	    'img': this.state.imgBase64,
	    'imgName': imgName,
	  },
	  files: [

	  ]
    };
    FileUpload.upload(obj, function(err, result) {
    })
  }
  
  cancelData(){
    this.props.navigator.push({
	  id: 'AdsList'
	});
  } 
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageHeading}>Add Classified Ad.</Text>
	    <Text style={styles.title}>Title</Text>
    	<TextInput value={this.state.title} onChangeText={(text) => this.setState({title: text})}
		style={styles.input} />
        <Text style={styles.title}>Details</Text>
        <TextInput multiline value={this.state.details} onChangeText={(text) => this.setState({details: text})}
        style={styles.input} />
	    <TouchableOpacity onPress={this.selectPhotoTapped}>
		  <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
		  { 
		    this.state.avatarSource === null ? <Text>Select a Photo</Text> :
		    <Image style={styles.avatar} source={this.state.avatarSource} />
		  }
		  </View>
	    </TouchableOpacity>
        <TouchableHighlight style={styles.button} onPress={this.persistData} underlayColor="white">
          <Text style={styles.buttonText}> ADD </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.cancelData} underlayColor="white">
          <Text style={styles.buttonText}> CANCEL </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
AppRegistry.registerComponent('AddAd', () => AddAd);
