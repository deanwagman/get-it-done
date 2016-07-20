import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li id="todo-item-{ this.props.id }">{ this.props.text }</li>
    );
  }
}

export default Todo;
