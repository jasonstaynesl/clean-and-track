
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 5,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor:'white',
    justifyContent: 'center',
    width:250,
    height:50,
  },
  forgot: {
    backgroundColor: 'transparent',
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  signup: {
    backgroundColor: 'transparent',
    paddingTop:0,
    marginTop:0
  }

};
