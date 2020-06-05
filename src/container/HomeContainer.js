import React from 'react';
import Home from '../components/scenes/home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text} from 'react-native';
import {getNewsList} from '../redux/actions/AppActions';

// class HomeContainer extends React.Component {
//   render() {
//     console.log('in Home container', this.props);
//     return (
//       <View>
//         {/* <Home /> */}
//         <Text>I am home my boss!</Text>
//       </View>
//     );
//   }
// }

const mapStateToProps = state => {
  // for reducer states
  // const {}
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getNewsList,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
