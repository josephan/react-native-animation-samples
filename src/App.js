import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Animation1 from './components/AnimationOne';
import Animation2 from './components/AnimationTwo';
import Animation3 from './components/AnimationThree';
import Animation4 from './components/AnimationFour';
import Animation5 from './components/AnimationFive';
import Animation6 from './components/AnimationSix';
import Animation7 from './components/AnimationSeven';
import Animation8 from './components/AnimationEight';
import Animation9 from './components/AnimationNine';

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
          <Scene key="animation5" component={Animation5} title="Animate Rotation" type="replace"/>
          <Scene key="animation6" component={Animation6} title="Animated Sequence" type="replace"/>
          <Scene key="animation7" component={Animation7} title="Stagger Animations" type="replace"/>
          <Scene key="animation8" component={Animation8} title="Parallel Animations" type="replace"/>
          <Scene key="animation9" component={Animation9} title="Flip Card" type="replace"/>
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
        <Link text="Animation Five" onPress={Actions.animation5} />
        <Link text="Animation Six" onPress={Actions.animation6} />
        <Link text="Animation Seven" onPress={Actions.animation7} />
        <Link text="Animation Eight" onPress={Actions.animation8} />
        <Link text="Animation Nine" onPress={Actions.animation9} />
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
