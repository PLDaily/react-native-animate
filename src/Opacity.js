import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';

class Opacity extends Component {
  constructor() {
    super()
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate()
  }
  animate(iteration, callback) {
    const { easing, duration, iterationCount } = this.props;
    let currentIteration = iteration || 0;

    this.animatedValue.setValue(0);

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: duration,
        easing: Easing[easing],
        isInteraction: iterationCount <= 1,
      }
    ).start(endState => {
      currentIteration += 1;
      if (
        endState.finished &&
        (iterationCount === 'infinite' || currentIteration < iterationCount)
      ) {
        this.animate(currentIteration, callback);
      } else if (callback) {
        callback(endState);
      }
    })
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
