import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigator from './components/scenes/home'

class App extends React.Component{
  render(){
    return(<View style={{flex:1}}>
      <Navigator/>
    </View>)
  }
}

export default Navigator;