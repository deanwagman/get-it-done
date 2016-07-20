import React, { Component } from 'react';
import Todo from './todo';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [
      { text: 'Clean living room', completed: false },
      { text: 'Clean Bathroom', completed: false },
      { text: 'Organize Magic Cards', completed: false },
      { text: 'Finish App', completed: false },
      { text: 'Water Plant', completed: false }
    ] };
    this.renderItem = this.renderItem.bind(this);
  }
  renderItem(item, index) {
    return <Todo text={ item.text } completed={ false } id={ index } />;
  }
  render() {
    return (
      <ul className="todo-list">
        { this.state.items.map(this.renderItem) }
      </ul>
    );
  }
}

export default List;
