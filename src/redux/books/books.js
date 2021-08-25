import axios from 'axios';
import Books from "../../components/Books";

//https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books
// ACTION TYPES
// const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS';
// const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
const GET_BOOK_REQUEST = 'GET_BOOK_REQUEST';
const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE';

// ACTION CREATORS
export const getBookRequest = () => {
  return {
    type: GET_BOOK_REQUEST,
  }};

  export const getBookSuccess = (books) => {
    return {
      type: GET_BOOK_SUCCESS,
      payload: books,
    }
  };

  export const getBookFailure = (error) => {
    return {
      type: GET_BOOK_FAILURE,
      payload: error,
    }
  };

  export const fetchBooks = () => {
    return (dispatch) => {
      dispatch(getBookRequest);
      axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Cr80pbkuf1RrEQZCSqfj/books')
      .then(response => {
        const books = response.data
        dispatch(getBookSuccess(books))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(getBookFailure(error))
      })
    }
  }

// REDUCERS
export const initialState = {
  loading: false,
  books: [],
  error: '',
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BOOK_REQUEST:
        return {
          ...state,
          loading: true,
        };

        case GET_BOOK_SUCCESS:
          return {
            loading: false,
            books: action.payload,
            error: '',
          };

        case GET_BOOK_FAILURE:
          return {
            loading: false,
            books: [],
            error: action.payload,
          }
  
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