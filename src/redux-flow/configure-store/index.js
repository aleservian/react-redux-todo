import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = () => (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x);

export default () => {
  const enhancer = compose(applyMiddleware(thunk), logger());
  const store = createStore(rootReducer, enhancer);

  return store;
};
