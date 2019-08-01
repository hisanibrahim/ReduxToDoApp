import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { connect } from 'react-redux'
class AddToDo extends Component {

    state = {
        text: ''
    }
    addTodo = (text) => {
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }
    render() {
        return (
            <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Eg. Learn Redux"
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={{ fontSize: 30, backgroundColor: '#eaeaea', height: 50, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 30, color: '#de9595', padding: 10 }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddToDo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});