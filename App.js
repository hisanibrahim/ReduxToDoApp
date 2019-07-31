import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Provider } from 'react-redux'
import ToDoApp from './src/ToDoApp'
import store from './src/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});