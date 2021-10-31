import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, task: "wake up" },
        { id: 2, task: "code" },
      ],
    };
  }

  addTask = (event) => {
    event.preventDefault();
    if (event.target.task.value) {
      const newTask = {
        id: this.state.todos.length + 1,
        task: event.target.task.value,
      };

      this.setState({ todos: [...this.state.todos, newTask] });
      event.target.task.value = "";
    }
  };

  deleteTask = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

  changeTask = (id) => {
    const newTask = prompt("plase enter new task name");
    if (newTask) {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            return { id: id, task: newTask };
          } else {
            return todo;
          }
        }),
      });
    } else {
      alert("name cant be empty");
    }
  };

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.addTask}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul className="todoUl">
          {this.state.todos.map((todo, i) => (
            <TodoItem
              task={todo}
              key={i}
              deleteTask={this.deleteTask}
              changeTask={this.changeTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}
