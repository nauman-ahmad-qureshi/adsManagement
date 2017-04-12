import { StyleSheet, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
	marginRight: 10,
	marginLeft: 10,
  },
  container: {
    backgroundColor: '#ffffff',
	marginRight: 10,
	marginLeft: 10,
	alignSelf: 'stretch'
  },
  rw: {
	flexDirection: 'row',
	height: 30 
  },
  fontBold: {
  	fontWeight: 'bold'
  },  
  c1: {
	flex: 1,
	padding: 5 
  },
  c2: {
	flex: 1,
	padding: 5 
  },
  c3: {
	flex: 1,
	padding: 5 
  },      
  pageHeading: {
    fontSize: 25,
    fontWeight: 'bold',
	marginBottom: 20,
  },
  title: {
    fontSize: 16,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
	color: 'white',
    alignSelf: 'center'
  },
  input: {
    height: 50,
    padding: 4,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
	marginBottom: 30,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }

});

module.exports = styles