import { createStore, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './books/books';

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
