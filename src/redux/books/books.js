// CNSTANTS
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// ACTIONS
export const addBook = (payload) => (
  {
    type: ADD_BOOK,
    payload,
  });

export const removeBook = (payload) => (
  {
    type: REMOVE_BOOK,
    payload,
  });

// REDUCERS
export const initialState = [
  {
    id: '1',
    title: 'Lord of The Flies',
    author: 'William Golding',
    genre: 'Drama',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
