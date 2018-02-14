import { v4 } from 'uuid';
import { ADD, REMOVE, UPDATE } from './actions';

export const addTodo = text => ({
  type: ADD,
  payload: {
    id: v4(),
    text,
  },
});

export const removeTodo = id => ({
  type: REMOVE,
  payload: {
    id,
  },
});

export const updateTodo = item => ({
  type: UPDATE,
  payload: { ...item },
});
