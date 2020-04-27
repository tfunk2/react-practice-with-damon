import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm'

class App extends Component {

  state = {
    todos: [{title: "First One", content: "First Content"}]
  }

  showTodos = () => this.state.todos.map(todo => (
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
    </li>
  ))

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />
        <ul>
          {this.showTodos()}
        </ul>
      </div>
    );
  }
}

export default App;
