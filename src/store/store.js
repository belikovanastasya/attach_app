import { createStore, combineReducers } from 'redux';
import * as redusers from './redusers';

const rootReducers = combineReducers(redusers);

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
