import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';

class Opacity extends Component {
  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount() {
    this.animate()
  }
  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: this.props.duration,
        easing: Easing.linear
      }
    ).start()
  }
  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })
    return (
      <Animated.View style={[this.props.styles, { opacity }]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default Opacity