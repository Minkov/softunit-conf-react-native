import React from 'react';
import { Text, View } from 'react-native';

import CheckBox from 'react-native-check-box'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { id, onTodoStateChange } = this.props;
        onTodoStateChange(id);
    }

    render() {
        const { text, isDone } = this.props;
        return (
            <View>
                <CheckBox
                    onClick={this.handleClick}
                    style={{ flex: 1, padding: 10 }}
                    leftText={text}
                    isChecked={isDone}
                />
            </View>

        );
    }
}

export default TodoItem;
