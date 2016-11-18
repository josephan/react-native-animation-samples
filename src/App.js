import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/HomePage';
import Animation1 from './components/AnimationOne';
import Animation2 from './components/AnimationTwo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomePage} title="Animations!" />
          <Scene key="animation1" component={Animation1} title="Changing Height" type="replace"/>
          <Scene key="animation2" component={Animation2} title="Transform Size" type="replace"/>
        </Scene>
      </Router>
    )
  }
}
