import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  render() {
    // AsyncStorage.clear();
    return <AppNavigator />;
  }
}
