import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AddToDo from './containers/AddToDo'
import VisibleToDos from "./containers/VisibleToDos";

class ToDoApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AddToDo />
                <View>
                    <VisibleToDos />
                </View>
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