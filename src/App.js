import "./styles.css";
import React from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(preState => {
      const updatedTodos = preState.todos.map(todo => {
        if (todo.id === id) {
          // console.log(todo.completed, "before")
          todo.completed = todo.completed ? false : true
          // console.log(todo.completed, "after")
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    }) 
  }
  render () {
    return (
      <div className="todo-list">
        {this.state.todos.map(item => <TodoItem key={item.id} {...item} handleChange={this.handleChange} />
        )}
      </div>
    );
  }
}

export default App;