import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import HomeContainer from '../container/HomeContainer';
// import Home from '../components/scenes/home';

class Navigator extends React.Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene title="Home" key={'Home'} component={HomeContainer} />
        </Stack>
      </Router>
    );
  }
}

export default Navigator;
