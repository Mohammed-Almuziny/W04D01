import React, { Component } from "react";
import "./style.css";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li className="todoItem">
          <h4>{this.props.task.task}</h4>
          <div className="editTask">
            <h4
              className="deleteBtn"
              onClick={() => this.props.deleteTask(this.props.task.id)}
            >
              X
            </h4>

            <h4 className="changeBtn" onClick={() => this.props.changeTask(this.props.task.id)}>change</h4>
          </div>
        </li>
      </div>
    );
  }
}
