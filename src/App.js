import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Navigator from './navigation/NavigationIndex';
import {Provider} from 'react-redux';
import store from './redux/Store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Navigator />
          <Text>test</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
