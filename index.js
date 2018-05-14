
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableHighlight,
  ScrollView,
  Easing
} from 'react-native';
import Opacity from './src/Opacity';

class Animate extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 5000,
  };

  render() {
    if(this.props.type === 'opacity') {
      return (
        <Opacity {...this.props} />
      )
    }
    return(
      <View>
        <Text>Error</Text>
      </View>
    )
  }
}


export default Animate