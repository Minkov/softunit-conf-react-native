import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Tabs from 'react-native-tabs';

import TodoForm from './components/todo-form';
import TodosList from './components/todos-list';
import { getService, SERVICE_TYPES } from './services';

class App extends React.Component {
  state = {
    page: 'list',
    todos: [],
  };

  constructor(props) {
    super(props);

    this.service = getService(SERVICE_TYPES.TODOS);
    this._handleOnTodoSave = this._handleOnTodoSave.bind(this);
    this._handleTodoStateChange = this._handleTodoStateChange.bind(this);
    this._showList = this._showList.bind(this);
    this._showForm = this._showForm.bind(this);
  }

  async componentDidMount() {
    await this._reloadData();
  }

  async _reloadData() {
    const todos = await this.service.getAll();
    this.setState({ todos });
  }

  async _handleOnTodoSave(todo) {
    await this.service.add(todo);
    await this._reloadData();
    this.setState({ page: 'list' });
  }

  async _handleTodoStateChange(todoId) {
    await this.service.changeTodoState(todoId);
    await this._reloadData();
  }

  _showList() {
    const { page, todos } = this.state;
    if (page === 'list') {
      return (
        <TodosList todos={todos} onTodoStateChange={this._handleTodoStateChange} />
      );
    }
    return null;
  }

  _showForm() {
    const { page } = this.state;
    if (page === 'form') {
      return (
        <TodoForm onSave={this._handleOnTodoSave} />
      );
    }
    return null;
  }

  render() {
    const { page } = this.state;
    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={{ backgroundColor: 'white' }}
          selectedStyle={{ color: 'red' }}
          onSelect={el => this.setState({ page: el.props.name })}
        >
          <Text name="list">List</Text>
          <Text name="form">Form</Text>
        </Tabs>
        <View >
          {this._showList()}
          {this._showForm()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    padding: 51,
  },
});

export default App;
