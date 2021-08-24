import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(reducers);

export default store;
