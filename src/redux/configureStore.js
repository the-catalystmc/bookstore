import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
