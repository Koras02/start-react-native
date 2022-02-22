import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const TodoInsert = ({ onAddTodo }) => {
    const [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };

    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };

    return (
        <View>
            <TextInput
                placeholder="Add an item"
                placeholderTextColor={'#999'}
                onChangeText={todoInputHandler}
                value={newTodoItem}
                autoCorrect={false}
            />
            <View>
                <Button title={'ADD'} onPress={addTodoHandler} />
            </View>
        </View>
    );
};
