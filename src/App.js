import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Animation1 from './components/AnimationOne';
import Animation2 from './components/AnimationTwo';
import Animation3 from './components/AnimationThree';
import Animation4 from './components/AnimationFour';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomePage} title="Animations!" />
          <Scene key="animation1" component={Animation1} title="Changing Height" type="replace"/>
          <Scene key="animation2" component={Animation2} title="Transform Size" type="replace"/>
          <Scene key="animation3" component={Animation3} title="Draggable Card" type="replace"/>
          <Scene key="animation4" component={Animation4} title="Animate Colors" type="replace"/>
        </Scene>
      </Router>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Link text="Animation One" onPress={Actions.animation1} />
        <Link text="Animation Two" onPress={Actions.animation2} />
        <Link text="Animation Three" onPress={Actions.animation3} />
        <Link text="Animation Four" onPress={Actions.animation4} />
      </ScrollView>
    )
  }
}

class Link extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  button: {
    paddingLeft: 20,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  buttonText: {

  }
})
