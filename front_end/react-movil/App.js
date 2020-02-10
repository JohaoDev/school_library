import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Login from "./pages/Login";
import virtualLibrary from './pages/virtualLibrary';
import Reserve from './pages/reserve';


export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/library" component={ Login } />
            <Route exact path="/" component={ virtualLibrary } />
            <Route path="/reserve" component={ Reserve } /> 
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
