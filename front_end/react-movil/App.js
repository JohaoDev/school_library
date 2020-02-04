import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Login from "./pages/Login";
import Catalogue from './pages/Catalogue';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/home" component={ Catalogue } />
            {/* <Route path="/home" component={ Catalogue } /> */}
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});