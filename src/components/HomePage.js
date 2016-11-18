import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomePage extends Component {
  render() {
    console.log('I GOT RENDERED')
    return (
      <ScrollView style={styles.container}>
        <Link text="Animation One" onPress={Actions.animation1} />
        <Link text="Animation Two" onPress={Actions.animation2} />
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
