import { createStore } from 'redux';
import reducers from './reducers';

// Initial state
const initialState = {
    todos: [],
};

// Create store
const store = createStore(reducers, initialState);

export default store;
