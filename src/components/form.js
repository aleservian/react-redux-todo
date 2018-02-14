import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux-flow/reducers/todos/action-creators';

const Form = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input type='text' name='todo' />
    <button type='submit'>Adicionar</button>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => { 
    e.preventDefault();
    dispatch(addTodo(e.target.todo.value));
    e.target.todo.value = '';
  }
})

export default connect(null,mapDispatchToProps)(Form);