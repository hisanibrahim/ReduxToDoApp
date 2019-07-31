import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AddToDo from './containers/AddToDo'

class ToDoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddToDo />
            </View>
        );
    }
}
export default ToDoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});