import React from 'react';
import {
    FlatList,
} from 'react-native';

import TodoItem from './todo-item';

class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this._extractKey = this._extractKey.bind(this);
        this._renderItem = this._renderItem.bind(this);
    }
    _extractKey(todo) {
        return todo.id.toString();
    }

    _renderItem({ item }) {
        const { onTodoStateChange } = this.props;

        return (
            <TodoItem {...item} onTodoStateChange={onTodoStateChange} />
        )
    }

    render() {
        const { todos } = this.props;

        return (
            <FlatList data={todos}
                keyExtractor={this._extractKey}
                renderItem={this._renderItem}
            />
        )
    }
}

export default TodosList;
