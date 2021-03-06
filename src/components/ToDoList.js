import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const ToDoList = ({ todos, toggleTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id}
                onPress={() => toggleTodo(todo.id)}>
                <Text style={{
                    fontSize: 24,
                    marginTop: 10,
                    padding: 10,
                    marginBottom: 10,
                    backgroundColor: '#d4d4d4',
                    textDecorationLine: todo.completed ? "line-through" : "none"
                }}>{todo.text} </Text>
            </TouchableOpacity>
        )}
    </View>
)
export default ToDoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});