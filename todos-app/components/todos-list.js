import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';

import TodoItem from './todo-item';

const extractKey = todo => todo.id.toString();

class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this._renderItem = this._renderItem.bind(this);
    }

    _renderItem({ item }) {
        const { onTodoStateChange } = this.props;

        return (
            <TodoItem {...item} onTodoStateChange={onTodoStateChange} />
        );
    }

    render() {
        const { todos } = this.props;
        console.log(todos);

        return (
            <FlatList
                data={todos}
                keyExtractor={extractKey}
                renderItem={this._renderItem}
            />
        );
    }
}

export default TodosList;
