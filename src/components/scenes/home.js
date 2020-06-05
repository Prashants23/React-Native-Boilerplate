import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Width, Height} from '../../utils/index';
import CustomIcons from '../atoms/CustomIcon';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Height,
    width: Width,
  },
});

class Home extends React.Component {
  componentDidMount() {
    this.props.getNewsList();
  }
  render() {
    console.log('Props in home screen', this.props.state.dataState.newsList);
    return (
      <View style={styles.mainContainer}>
        <CustomIcons name="flag" size={40} color={'red'} />
        <Text>Here we go again!</Text>
      </View>
    );
  }
}

export default Home;
