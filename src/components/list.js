import React from 'react';
import {connect} from 'react-redux';
import Item from './item';

const List = ({todos}) => (
  <ul>
    {todos.map(todo => (
      <Item key={todo.id} text={todo.text} />
    ))}
  </ul>
)
List.defaultProps = {
  todos: []
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(List);