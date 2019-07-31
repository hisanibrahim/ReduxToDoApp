import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

class AddToDo extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                <TextInput
                    placeholder="Eg. Learn Redux"
                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                />
                <TouchableOpacity onPress={() => Alert.alert('Added')}>
                    <View style={{ fontSize: 30, backgroundColor: '#eaeaea', height: 50, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 30, color: '#de9595', padding: 10 }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default AddToDo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});