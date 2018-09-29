import React from 'react';
import { Text, View } from 'react-native';

import CheckBox from 'react-native-check-box'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        const { id, onTodoStateChange } = this.props;
        onTodoStateChange(id);
    }

    render() {
        const { text, isDone } = this.props;
        return (
            <View style={{paddingTop: 10}}>
                <CheckBox
                    onClick={this._handleClick}
                    rightText={text}
                    isChecked={isDone}
                />
            </View>
        );
    }
}

export default TodoItem;
