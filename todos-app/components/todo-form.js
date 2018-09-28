import React from 'react';
import {
    View,
    TextInput,
    Button,
} from 'react-native';

class TodoForm extends React.Component {
    state = {
        text: '',
    };

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    handleTextChange(text) {
        this.setState({ text });
    }

    _handleClick() {
        const { onSave } = this.props;
        onSave({ ...this.state });
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    placeholder="Enter todo text"
                    value={this.state.text}
                />
                <Button
                    onPress={this._handleClick}
                    title="Save"
                />
            </View>
        );
    }
}

export default TodoForm;
