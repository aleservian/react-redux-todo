import { ADD, REMOVE, UPDATE } from './actions';

export const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return state.concat(payload);

    case REMOVE:
      return state.filter(todo => (todo.id !== payload.id));

    case UPDATE:
      return state.map(todo => ((todo.id === payload.id) ? { ...payload } : todo));

    default:
      return state;
  }
};
