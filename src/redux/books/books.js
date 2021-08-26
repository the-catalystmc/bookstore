/* eslint-disable camelcase */
// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books
// ACTION TYPES
// const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
const ADD_BOOK_SUCCESS = 'bookstore/books/addBook/fulfilled';
const GET_BOOK_REQUEST = 'GET_BOOK_REQUEST';
const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE';

// ACTION CREATORS
export const getBookRequest = () => ({
  type: GET_BOOK_REQUEST,
});

export const getBookSuccess = (books) => ({
  type: GET_BOOK_SUCCESS,
  payload: books,
});

export const getBookFailure = (error) => ({
  type: GET_BOOK_FAILURE,
  payload: error,
});

export const addBookSuccess = (payload) => ({
  type: ADD_BOOK_SUCCESS,
  payload,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(getBookRequest);
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books')
    .then((response) => {
      const books = Object.entries(response.data).map((book) => ({
        id: book[0],
        title: book[1][0].title,
        category: book[1][0].category,
        author: 'Jane Doe',
      }));
      dispatch(getBookSuccess(books));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(getBookFailure(errorMsg));
    });
};

// export const addBook = createAsyncThunk(
//   'bookstore/books/addBook',
//   async (book) => {
//     console.log(book);
//     const { item_id, category, title } = book;
//     const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books', {
//       item_id,
//       title,
//       category,
//     }, {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     });
//     if (response.ok) {
//       return {
//         id: item_id,
//         title,
//         category,
//         author: 'Jane Doe',
//       };
//     }
//     return {};
//   },
// );

export const addBook = (newBook) => (dispatch) => {
  const { item_id, category, title } = newBook;
  console.log(newBook);
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books', {
    item_id,
    title,
    category,
  }).then(() => {
    dispatch(addBookSuccess({
      id: item_id,
      title,
      category,
      author: 'Jane Doe',
    }));
  });
};

// REDUCERS
export const initialState = {
  loading: false,
  books: [],
  error: '',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return { ...state, loading: true };

    case GET_BOOK_SUCCESS:
      return {
        ...state,
        loading: true,
        books: [...state.books, ...action.payload],
        error: '',
      };

    case GET_BOOK_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };

    case ADD_BOOK_SUCCESS:
      return { ...state, books: [...state.books, action.payload] };

      // case REMOVE_BOOK:
      //   return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;

// // CONSTANTS
// const ADD_BOOK = 'ADD_BOOK';
// const REMOVE_BOOK = 'REMOVE_BOOK';

// // ACTIONS
// export const addBook = (payload) => (
//   {
//     type: ADD_BOOK,
//     payload,
//   });

// export const removeBook = (payload) => (
//   {
//     type: REMOVE_BOOK,
//     payload,
//   });

// // REDUCERS
// export const initialState = [];

// const booksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [
//         ...state,
//         action.payload,
//       ];

//     case REMOVE_BOOK:
//       return state.filter((item) => item.id !== action.payload.id);

//     default:
//       return state;
//   }
// };
