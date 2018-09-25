// import Toast from 'react-native-simple-toast';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
  } from 'react-native';


class MainScreen extends Component {
    state = {
        isVisible: false,
    };

    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
        }

        showText() {
        const {isVisible} = this.state;

        if(isVisible) {
            return (
            <Text>
                Open up App.js to start working on your app!
            </Text>
            );
        }
    }

    handleOnClick(ev) {
        let {isVisible } = this.state;
        isVisible = !isVisible;
        this.setState({isVisible});
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.handleOnClick}
                    title="Click me"/>
                    {this.showText()}
            </View>
        );
    }
}

export default MainScreen;
