import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Animation4 extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
    })
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        {translateY: this.animatedValue}
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
  }
});
