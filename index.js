import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import Opacity from './src/Opacity';

class Animate extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    duration: PropTypes.number,
    easing: PropTypes.string,
    iterationCount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  static defaultProps = {
    duration: 5000,
    easing: 'linear',
    iterationCount: 1
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