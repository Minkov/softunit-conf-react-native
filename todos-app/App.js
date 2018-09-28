import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import TodoForm from './components/todo-form';
import TodosList from './components/todos-list';
import { getService, SERVICE_TYPES } from './services';

class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'listTodos', title: 'Todos' },
      { key: 'todoForm', title: 'Add' },
    ],
    todos: [],
  };

  constructor(props) {
    super(props);

    this.service = getService(SERVICE_TYPES.TODOS);
    this._handleOnTodoSave = this._handleOnTodoSave.bind(this);
    this._handleTodoStateChange = this._handleTodoStateChange.bind(this);
  }

  async componentDidMount() {
    debugger;
    await this._reloadData();
  }

  async _reloadData() {
    const todos = await this.service.getAll();
    this.setState({ todos });
  }

  async _handleOnTodoSave(todo) {
    await this.service.add(todo);
    await this._reloadData();
    this.setState({ index: 0 });
  }

  _listTodosRoute() {
    const { todos } = this.state;
    return <TodosList todos={todos} onTodoStateChange={this._handleTodoStateChange} />
  }

  _addTodoRoute() {
    return <TodoForm style={styles.container} onSave={this._handleOnTodoSave} />
  }

  async _handleTodoStateChange(todoId) {
    await this.service.changeTodoState(todoId);
    await this._reloadData();
  }

  render() {
    return (
      <View>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            listTodos: () => this._listTodosRoute(),
            todoForm: () => this._addTodoRoute(),
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
