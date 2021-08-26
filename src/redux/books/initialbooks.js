// ACTIONS
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// ACTION TYPE
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
export const initialState = [];

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